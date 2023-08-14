import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';

export const createUser = async (req: Request, res: Response) => {
  try {
    const userRepository = getRepository(User);
    const newUser = userRepository.create(req.body);
    const user = await userRepository.save(newUser);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const userRepository = getRepository(User);
    const user = await userRepository.findOneBy({id:Number(req.params.id)} );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    userRepository.merge(user, req.body);
    const updatedUser = await userRepository.save(user);

    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const userRepository = getRepository(User);
    const user = await userRepository.findOneBy({id:Number(req.params.id)} );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await userRepository.remove(user);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const userRepository = getRepository(User);
    const user = await userRepository.findOneBy({id:Number(req.params.id)} );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(400).json({ error: 'Invalid input' });
  }
};



