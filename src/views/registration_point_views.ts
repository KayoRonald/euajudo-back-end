import RegistionPoint from '../modules/Registration/typeorm/models/registration_pointModels';

export default {
  // eslint-disable-next-line
  render(registionPoint: RegistionPoint) {
    return {
      id: registionPoint.id,
      namePoint: registionPoint.namePoint,
      latitude: registionPoint.latitude,
      longitude: registionPoint.longitude,
      about: registionPoint.about,
      whatsapp: registionPoint.whatsapp,
      responsible_name: registionPoint.responsibleName,
      typePoint: registionPoint.typePoint,
    };
  },
};
