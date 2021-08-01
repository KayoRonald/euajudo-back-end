import { getCustomRepository } from 'typeorm';

import AppError from '@shared/errors/AppError';
import RegistionPoint from '@modules/Registration/typeorm/models/RegistrationPoint';
import { RegistionPointRepository } from '@modules/Registration/typeorm/repositories/RegistrationRepository';

interface IRequest {
  id: number;
  namePoint: string;
  latitude: number;
  longitude: number;
  about: string;
  whatsapp: number;
  responsibleName: string;
  typePoint: string;
}

export default class UpdateServie {
  public async execute({
    id,
    about,
    latitude,
    longitude,
    namePoint,
    responsibleName,
    typePoint,
    whatsapp,
  }: IRequest): Promise<RegistionPoint> {
    const registrationRepository = getCustomRepository(
      RegistionPointRepository,
    );

    const point = await registrationRepository.findOne({ where: { id: id } });

    if (!point) {
      throw new AppError('Ponto de registro não encontrado');
    }

    point.about = about;
    point.latitude = latitude;
    point.longitude = longitude;
    point.namePoint = namePoint;
    point.responsibleName = responsibleName;
    point.typePoint = typePoint;
    point.whatsapp = whatsapp;

    return await registrationRepository.save(point);
  }
}
