import { ObjectId } from 'bson';
import { IUserProps, User } from './user.model';
export class UserService {
    get(id: ObjectId){
        return User.findById(id);
    }

    create(user: IUserProps) {
        return User.create(user);   
    }
}