// pagination.decorator.ts
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  meta: {
    total: number;
    page: number;
    lastPage: number;
    limit: number;
  };
}

export const Pagination = () => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: any[]) {
      // Récupérer les paramètres de query
      const query = args.find((arg) => arg && arg.page !== undefined) || {};
      const page = Number(query.page) || 1;
      const limit = Number(query.limit) || 10;

      // Appeler la méthode originale
      const result = await originalMethod.apply(this, args);
      const items = Array.isArray(result.data) ? result.data : [];

      // Calculer la pagination
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;
      const paginatedItems = items.slice(startIndex, endIndex);
      const total = items.length;
      const lastPage = Math.ceil(total / limit);

      // Retourner la réponse paginée
      return {
        status: result.status,
        message: result.message,
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

// Décorateur de paramètre pour extraire les paramètres de pagination
export const PaginateParams = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): PaginationParams => {
    const request = ctx.switchToHttp().getRequest();
    return {
      page: Number(request.query.page) || 1,
      limit: Number(request.query.limit) || 10,
    };
  },
);
