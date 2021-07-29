import { Request, Response } from 'express';
import DeleteRegistrationPoinService from '../services/DeleteService';

import ListService from '../services/ListService';
import RegistrationPointService from '../services/RegistrationService';
import UpdateServie from '../services/UpdateService';

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

  async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deletePoint = new DeleteRegistrationPoinService();

    const pointId = parseInt(id);

    await deletePoint.execute({ pointId });

    return response.status(200).json('Ponto deleteado com sucesso');
  }

  async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const {
      about,
      latitude,
      longitude,
      namePoint,
      responsibleName,
      typePoint,
      whatsapp,
    } = request.body;

    const updatePoint = new UpdateServie();

    const pointId = parseInt(id);

    const update = await updatePoint.execute({
      id: pointId,
      about,
      latitude,
      longitude,
      namePoint,
      responsibleName,
      typePoint,
      whatsapp,
    });

    return response.status(200).json(update);
  }
}
