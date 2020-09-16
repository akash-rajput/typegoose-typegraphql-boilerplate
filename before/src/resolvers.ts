
import { merge } from 'lodash';

import { userResolvers } from './user/user.resolver';

export const resolvers = [
  userResolvers,
].reduce(merge);
