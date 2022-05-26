import StayRepository from '../repositories/StayRepository';

const stay = new StayRepository();

const stayService = () => {
  const get = (id) => stay.get(id);
  const getAll = () => stay.getAll();
  const select = (id, places) => stay.select(id, places);

  return {
    get,
    getAll,
    select,
  };
};

export default stayService;
