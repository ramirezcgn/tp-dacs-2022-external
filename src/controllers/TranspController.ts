import transpService from '../services/transpService';

const TranspController = () => {
  const getAll = async (req, res) => {
    try {
      const transps = await transpService().getAll();
      if (!transps) {
        return res.status(400).json({ msg: 'Bad Request: Models not found' });
      }
      return res.status(200).json({ transps });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const get = async (req, res) => {
    try {
      const transp = await transpService().get(req.params.id);
      if (!transp) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ transp });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const select = async (req, res) => {
    try {
      const transp = await transpService().select(
        req.params.id,
        parseInt(req.body.places, 10),
      );
      if (!transp) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ transp });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  return {
    getAll,
    get,
    select,
  };
};

export default TranspController;
