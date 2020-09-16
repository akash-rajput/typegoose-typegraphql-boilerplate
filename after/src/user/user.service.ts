import { UserModel } from './user.model';
export class UserService {
    get(id: string){
        return UserModel.findById(id);
    }

    create(user: any) {
        return UserModel.create(user);   
    }
}