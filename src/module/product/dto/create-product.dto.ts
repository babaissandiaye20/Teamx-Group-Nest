import {
  IsString,
  IsNumber,
  IsNotEmpty,
  Min,
  IsOptional,
  /*   IsUrl, */
  ValidateIf,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'Nom du produit',
    example: 'iPhone 13',
    required: true,
  })
  @IsString({
    message: 'Le nom doit être une chaîne de caractères',
  })
  @IsNotEmpty({
    message: 'Le nom doit être renseigné',
  })
  name: string;

  @ApiProperty({
    description: 'Prix du produit',
    example: 10000,
    minimum: 0,
    required: true,
  })
  @IsNumber(
    {},
    {
      message: 'Le prix doit être un nombre',
    },
  )
  @Min(0)
  @IsNotEmpty({
    message: 'Le prix doit être renseigné',
  })
  price: number;

  @ApiProperty({
    description: 'Quantité en stock',
    example: 50,
    minimum: 0,
    required: true,
  })
  @IsNumber()
  @Min(0, {
    message: 'La quantité doit être supérieure ou égale à 0',
  })
  @IsNotEmpty({
    message: 'La quantité doit être renseignée',
  })
  quantity: number;

  @ApiPropertyOptional({
    description: "URL de l'image du produit",
    example: 'https://example.com/iphone13.jpg',
    type: 'string',
    format: 'binary',
  })
  @ValidateIf((o) => o.image !== undefined && o.image !== '', {
    message: "l'image doit être rensaigner",
  })
  /*  @IsUrl() */
  @IsOptional()
  image?: string;
}
