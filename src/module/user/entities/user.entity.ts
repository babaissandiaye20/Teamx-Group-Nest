// module/user/entities/user.entity.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity } from '../../../services/base/entity/base.entity';

@Schema({ timestamps: true })
export class User extends BaseEntity {
  @Prop({ required: true })
  firstname: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  address: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
