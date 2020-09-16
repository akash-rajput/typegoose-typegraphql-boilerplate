import { ObjectId } from 'bson';
import { IResolvers } from 'graphql-tools';
import { IUserProps } from './user.model';
import {UserService} from './user.service';

const userService = new UserService();
export const userResolvers: IResolvers = {
  Query: {
    User: (_root: unknown, args: { id: ObjectId }) => userService.get(args.id),
    //...
  },
  Mutation: {
    createUser: async (root: unknown, args: IUserProps) => await userService.create(args),
    //...
  }
};