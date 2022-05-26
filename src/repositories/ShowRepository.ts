import { Op } from 'sequelize';
import Repository from './ExternalRepository';
import Show from '../models/Show';

export default class ShowRepository implements Repository {
  get(id) {
    return Show.findOne({
      where: { [Op.or]: [
        { id },
        { idService: id }
      ]}
    });
  }

  getAll() {
    return Show.findAll();
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
    return Show.update(
      { places: curPlaces - places },
      {
        where: {
          id,
        },
      },
    );
  }
}
