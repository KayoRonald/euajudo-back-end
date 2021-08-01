import { EntityRepository, Repository } from 'typeorm';

import RegistionPoint from '@modules/Registration/typeorm/models/RegistrationPoint';

@EntityRepository(RegistionPoint)
export class RegistionPointRepository extends Repository<RegistionPoint> {}
