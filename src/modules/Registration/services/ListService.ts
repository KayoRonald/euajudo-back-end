import { getCustomRepository } from 'typeorm';

import RegistionPoint from '@modules/Registration/typeorm/models/RegistrationPoint';
import { RegistionPointRepository } from '@modules/Registration/typeorm/repositories/RegistrationRepository';

export default class ListService {
  public async execute(): Promise<RegistionPoint[]> {
    const registrationRepository = getCustomRepository(
      RegistionPointRepository,
    );

    return await registrationRepository.find();
  }
}
