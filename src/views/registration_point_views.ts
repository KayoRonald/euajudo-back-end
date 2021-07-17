import RegistionPoint from '../models/registration_pointModels'

export default{
  render(registionPoint: RegistionPoint) {
    return{
      id: registionPoint.id,
      namePoint: registionPoint.namePoint,
      latitude: registionPoint.latitude,
      longitude: registionPoint.longitude,
      about: registionPoint.about,
      whatsapp: registionPoint.whatsapp,
      responsible_name: registionPoint.responsible_name,
      typePoint: registionPoint.typePoint
    }
  }
}