import { getCustomRepository } from 'typeorm';
import AppError from '../../../errors/AppError';

import RegistionPoint from '../typeorm/models/registration_pointModels';
import { RegistionPointRepository } from '../typeorm/repositories/RegistrationRepository';

interface IRequest {
  namePoint: string;
  latitude: number;
  longitude: number;
  about: string;
  whatsapp: number;
  responsibleName: string;
  typePoint: string;
}

export default class RegistrationPointService {
  public async execute({
    responsibleName,
    about,
    latitude,
    longitude,
    namePoint,
    typePoint,
    whatsapp,
  }: IRequest): Promise<RegistionPoint> {
    const registionPointRepository = getCustomRepository(
      RegistionPointRepository,
    );

    const create = await registionPointRepository.create({
      about,
      latitude,
      longitude,
      namePoint,
      responsibleName,
      typePoint,
      whatsapp,
    });

    if (create.latitude && create.longitude) {
      throw new AppError(`Ponto de registro ${create.namePoint} já cadastrado`);
    }

    return await registionPointRepository.save(create);
  }
}
