import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import { User } from './user.model';
import { UserService } from './user.service';


@Resolver(_of => User)

export class UserResolver {
  private readonly __userService: UserService;

  constructor() {
    this.__userService = new UserService();    
  }

  @Mutation(_returns => User)
  async createUser(@Arg('email', type => String) email: string, @Ctx() ctx: any) {
   return this.__userService.create({email})
  }
}


