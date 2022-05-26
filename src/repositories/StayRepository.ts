import { Op } from 'sequelize';
import ExternalRepository from './ExternalRepository';
import Stay from '../models/Stay';

export default class StayRepository implements ExternalRepository {
  get(id) {
    return Stay.findOne({
      where: { [Op.or]: [
        { id },
        { idService: id }
      ]}
    });
  }

  getAll() {
    return Stay.findAll();
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
    return Stay.update(
      { places: curPlaces - places },
      {
        where: {
          id,
        },
      },
    );
  }
}
