// user/dto/find-user.dto.ts
import { IsString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FindUserDto {
  @ApiPropertyOptional({
    description: 'Filtrer par prénom',
    example: 'John',
  })
  @IsString()
  @IsOptional()
  firstname?: string;

  @ApiPropertyOptional({
    description: 'Filtrer par nom',
    example: 'Doe',
  })
  @IsString()
  @IsOptional()
  lastname?: string;

  @ApiPropertyOptional({
    description: 'Filtrer par adresse',
    example: 'Paris',
  })
  @IsString()
  @IsOptional()
  address?: string;
}
