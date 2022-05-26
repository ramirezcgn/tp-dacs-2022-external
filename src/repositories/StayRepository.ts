import ExternalRepository from './ExternalRepository';
import Stay from '../models/Stay';

export default class StayRepository implements ExternalRepository {
  get(id) {
    return Stay.findByPk(id);
  }

  getAll() {
    return Stay.findAll();
  }

  select(id, places) {
    return Stay.update(
      { places },
      {
        where: {
          id,
        },
      },
    );
  }
}
