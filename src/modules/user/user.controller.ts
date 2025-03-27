import { Request, Response } from 'express';
import { userService } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await userService.createUser(payload)

    res.json({
      message: 'User create successfully!',
      result,
    });
  } catch (error) {
    res.json({
      message: 'User not created',
      error,
    });
  }
};

export const userController = {
  createUser,
};
