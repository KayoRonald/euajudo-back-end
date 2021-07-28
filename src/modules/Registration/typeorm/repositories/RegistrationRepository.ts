import { EntityRepository, Repository } from 'typeorm';

import RegistionPoint from '../models/registration_pointModels';

@EntityRepository(RegistionPoint)
export class RegistionPointRepository extends Repository<RegistionPoint> {}
