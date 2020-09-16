import { DocumentType, getModelForClass, prop as Property } from '@typegoose/typegoose';
import { getSchemaOptions } from 'src/util/typegoose';
import { Field as GqlField, ObjectType as GqlType } from 'type-graphql';

@GqlType()
export class User {
  @GqlField(_type => String)
  readonly _id: string;

  @GqlField(_type => String)
  @Property({ required: true })
  firstName: string;

  @GqlField(_type => String, { nullable: true })
  @Property({ required: false })
  lastName: string;

  @GqlField(_type => String)
  @Property({ required: true })
  password: string;

  @GqlField(_type => String)
  @Property({ required: true, unique: true })
  email: string;

  hashPassword(this: DocumentType<User>, _password: string) {
    //
  }
}

export const UserModel = getModelForClass(User, getSchemaOptions());
