import {
  IsString,
  IsNumber,
  IsNotEmpty,
  Min,
  IsOptional,
  IsUrl,
  ValidateIf,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    description: 'Nom du produit',
    example: 'iPhone 13',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'Prix du produit',
    example: 10000,
    minimum: 0,
    required: true,
  })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    description: 'Quantité en stock',
    example: 50,
    minimum: 0,
    required: true,
  })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  quantity: number;

  @ApiPropertyOptional({
    description: "URL de l'image du produit",
    example: 'https://example.com/iphone13.jpg',
    type: 'string',
    format: 'binary',
  })
  @ValidateIf((o) => o.image !== undefined && o.image !== '')
  @IsUrl()
  @IsOptional()
  image?: string;
}
