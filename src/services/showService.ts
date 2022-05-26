import ShowRepository from '../repositories/ShowRepository';

const show = new ShowRepository();

const showService = () => {
  const get = (id) => show.get(id);
  const getAll = () => show.getAll();
  const select = (id, places) => show.select(id, places);

  return {
    get,
    getAll,
    select,
  };
};

export default showService;
