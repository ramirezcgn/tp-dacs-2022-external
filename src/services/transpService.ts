import TranspRepository from '../repositories/TranspRepository';

const transp = new TranspRepository();

class TranspService {
  get(id) {
    return transp.get(id);
  }

  getAll() {
    return transp.getAll();
  }

  select(id, places) {
    return transp.select(id, places);
  }
}

export default new TranspService();
