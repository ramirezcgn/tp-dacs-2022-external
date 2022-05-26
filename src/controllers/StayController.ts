import stayService from '../services/stayService';

const StayController = () => {
  const getAll = async (req, res) => {
    try {
      const stays = await stayService().getAll();
      if (!stays) {
        return res.status(400).json({ msg: 'Bad Request: Models not found' });
      }
      return res.status(200).json({ stays });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const get = async (req, res) => {
    try {
      const stay = await stayService().get(req.params.id);
      if (!stay) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ stay });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const select = async (req, res) => {
    try {
      const stay = await stayService().select(req.params.id, req.body.places);
      if (!stay) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ stay });
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

export default StayController;
