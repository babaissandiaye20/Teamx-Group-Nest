// product/dto/find-product.dto.ts
import { IsString, IsNumber, IsOptional, Min } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FindProductDto {
  @ApiPropertyOptional({
    description: 'Filtrer par nom de produit',
    example: 'iPhone',
  })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({
    description: 'Filtrer par prix',
    example: 999.99,
    minimum: 0,
  })
  @IsNumber()
  @IsOptional()
  @Min(0)
  price?: number;

  @ApiPropertyOptional({
    description: 'Filtrer par quantité',
    example: 50,
    minimum: 0,
  })
  @IsNumber()
  @IsOptional()
  @Min(0)
  quantity?: number;
}
