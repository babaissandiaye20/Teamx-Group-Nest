import { createParamDecorator, ExecutionContext } from '@nestjs/common';

// Définition des types pour la pagination
interface PaginationParams {
  page: number;
  limit: number;
}

// Décorateur pour extraire les paramètres de pagination depuis la requête
export const PaginateParams = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): PaginationParams => {
    const request = ctx.switchToHttp().getRequest();
    return {
      page: request.query.page ? Number(request.query.page) : 1,
      limit: request.query.limit ? Number(request.query.limit) : 10,
    };
  },
);

// Décorateur pour appliquer la logique de pagination sur les résultats retournés
export const Pagination = () => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      // Récupérer les paramètres de requête
      const request = args.find((arg) => arg && arg.page !== undefined);
      const page = request?.page || 1;
      const limit = request?.limit || 10;

      // Exécuter la méthode originale pour obtenir le résultat du service
      const serviceResponse = await originalMethod.apply(this, args);

      // Vérifier que serviceResponse.data existe et est un tableau
      // Si ce n'est pas le cas, conserver la structure d'origine
      if (!serviceResponse || !serviceResponse.data) {
        return serviceResponse;
      }

      const items = Array.isArray(serviceResponse.data)
        ? serviceResponse.data
        : [];

      // Calcul de la pagination
      const total = items.length;
      const lastPage = Math.ceil(total / limit) || 1;
      const startIndex = (page - 1) * limit;
      const paginatedItems = items.slice(startIndex, startIndex + limit);

      // Retourner la réponse paginée avec la même structure que votre responseService
      return {
        status: serviceResponse.status || 'success',
        message: serviceResponse.message || 'Opération réussie',
        data: paginatedItems,
        meta: {
          total,
          page,
          lastPage,
          limit,
        },
      };
    };

    return descriptor;
  };
};
