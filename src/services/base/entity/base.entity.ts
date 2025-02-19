import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document, Types } from 'mongoose';

@Schema()
export class BaseEntity extends Document {
  @ApiProperty({ description: 'ID MongoDB unique' })
  _id: Types.ObjectId;

  @ApiProperty({ description: 'Date de création' })
  @Prop({ default: Date.now })
  createdAt: Date;

  @ApiProperty({ description: 'Date de dernière modification' })
  @Prop({ default: Date.now })
  updatedAt: Date;

  @ApiProperty({ description: 'Indicateur de suppression logique' })
  @Prop({ default: false })
  isDeleted: boolean;
}
