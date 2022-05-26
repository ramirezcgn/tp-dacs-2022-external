import Repository from './ExternalRepository';
import Show from '../models/Show';

export default class ShowRepository implements Repository {
  get(id) {
    return Show.findByPk(id);
  }

  getAll() {
    return Show.findAll();
  }

  select(id, places) {
    return Show.update(
      { places },
      {
        where: {
          id,
        },
      },
    );
  }
}
