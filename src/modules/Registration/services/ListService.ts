import { getCustomRepository } from 'typeorm';

import RegistionPoint from '../typeorm/models/registration_pointModels';
import { RegistionPointRepository } from '../typeorm/repositories/RegistrationRepository';

export default class ListService {
  public async execute(): Promise<RegistionPoint[]> {
    const registrationRepository = getCustomRepository(
      RegistionPointRepository,
    );

    return await registrationRepository.find();
  }
}
