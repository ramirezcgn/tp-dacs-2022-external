import { Op } from 'sequelize';
import ExternalRepository from './ExternalRepository';
import Transp from '../models/Transp';

export default class TranspRepository implements ExternalRepository {
  get(id) {
    return Transp.findOne({
      where: { [Op.or]: [
        { id },
        { idService: id }
      ]}
    });
  }

  getAll() {
    return Transp.findAll();
  }

  async select(id, places) {
    const item = await this.get(id);
    if (!item) {
      return null;
    }
    const { places: curPlaces } = item;
    if (curPlaces < places) {
      return null;
    }
    return Transp.update(
      { places: curPlaces - places },
      {
        where: {
          id,
        },
      },
    );
  }
}
