import StayRepository from '../repositories/StayRepository';

const stay = new StayRepository();

class StayService {
  get(id) {
    return stay.get(id);
  }

  getAll() {
    return stay.getAll();
  }

  select(id, places) {
    return stay.select(id, places);
  }
}

export default new StayService();
