// product/entities/product.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity } from 'src/services/base/entity/base.entity';

@Schema()
export class Product extends BaseEntity {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, min: 0 })
  price: number;

  @Prop({ required: true, min: 0 })
  quantity: number;

  @Prop()
  image: string;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
