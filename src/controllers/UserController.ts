import { Request, Response } from 'express';
import UserService from '../services/UserService';
import createTokenJWT from '../jwtConfig';

export default class UserController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
    this.create = this.create.bind(this);
  }

  async create(req: Request, res: Response): Promise<void> {
    const user = req.body;
    const newUser = await this.userService.create(user);
    const token = createTokenJWT(newUser);
    res.status(201).json({ token });
  }
}
