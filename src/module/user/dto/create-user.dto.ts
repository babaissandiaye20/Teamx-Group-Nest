// user/dto/create-user.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: "Prénom de l'utilisateur",
    example: 'Baba Issa',
    required: true,
  })
  @IsString({
    message: 'Le prénom doit être une chaîne de caractères',
  })
  @IsNotEmpty({
    message: 'Le prénom doit être renseigné',
  })
  firstname: string;

  @ApiProperty({
    description: "Nom de l'utilisateur",
    example: 'Ndiaye',
    required: true,
  })
  @IsString({
    message: 'Le nom doit être une chaîne de caractères',
  })
  @IsNotEmpty({
    message: 'Le nom doit être renseigné',
  })
  lastname: string;

  @ApiProperty({
    description: "Adresse de l'utilisateur",
    example: 'Ouakam',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  address: string;
}
