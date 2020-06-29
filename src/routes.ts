import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: 'Gustavo', 
    email: 'gustavo2892@gmail.com', 
    password: '1234',
    techs: [
      'NodeJS', 
      'ReactJS',
      { title: 'Javascript', experience: 100 }
    ]
  });

  return response.json({ message: 'Hello World' });
};