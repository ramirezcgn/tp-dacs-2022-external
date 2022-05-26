import TranspRepository from '../repositories/TranspRepository';

const transp = new TranspRepository();

const transpService = () => {
  const get = (id) => transp.get(id);
  const getAll = () => transp.getAll();
  const select = (id, places) => transp.select(id, places);

  return {
    get,
    getAll,
    select,
  };
};

export default transpService;
