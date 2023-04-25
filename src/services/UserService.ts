import connection from '../models/connection';
import UserModel from '../models/UserModel';
import User from '../interfaces/user.interface';

export default class UserService {
  model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  create(user: User): Promise<User> {
    return this.model.create(user);
  }
}
