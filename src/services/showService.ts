import ShowRepository from '../repositories/ShowRepository';

const show = new ShowRepository();

class ShowService {
  get(id) {
    return show.get(id);
  }

  getAll() {
    return show.getAll();
  }

  select(id, places) {
    return show.select(id, places);
  }
}

export default new ShowService();
