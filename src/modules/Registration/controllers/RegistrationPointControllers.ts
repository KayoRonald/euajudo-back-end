import { Request, Response } from 'express';

import ListService from '../services/ListService';
import RegistrationPointService from '../services/RegistrationService';

export default class RegistionPointController {
  async create(request: Request, response: Response): Promise<Response> {
    const {
      about,
      latitude,
      longitude,
      whatsapp,
      typePoint,
      namePoint,
      responsibleName,
    } = request.body;

    const registionPoint = new RegistrationPointService();

    const register = await registionPoint.execute({
      about,
      latitude,
      longitude,
      whatsapp,
      typePoint,
      namePoint,
      responsibleName,
    });

    return response.status(201).json(register);
  }

  async index(request: Request, response: Response): Promise<Response> {
    const listPoint = new ListService();

    const list = await listPoint.execute();

    return response.status(200).json(list);
  }
}
