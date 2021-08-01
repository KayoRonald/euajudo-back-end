import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import RegistionPoint from '@modules/Registration/typeorm/models/RegistrationPoint';
import { RegistionPointRepository } from '@modules/Registration/typeorm/repositories/RegistrationRepository';

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

    const findPoins = await registionPointRepository.find();

    for (let i = 0; i < findPoins.length; i++) {
      if (findPoins[i].latitude && findPoins[i].longitude) {
        throw new AppError(
          `Ponto de registro ${create.namePoint} já cadastrado`,
        );
      }
    }

    return await registionPointRepository.save(create);
  }
}
