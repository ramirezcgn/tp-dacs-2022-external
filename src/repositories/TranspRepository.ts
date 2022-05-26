import Repository from './ExternalRepository';
import Transp from '../models/Transp';

export default class TranspRepository implements Repository {
  get(id) {
    return Transp.findByPk(id);
  }

  getAll() {
    return Transp.findAll();
  }

  select(id, places) {
    return Transp.update(
      { places },
      {
        where: {
          id,
        },
      },
    );
  }
}
