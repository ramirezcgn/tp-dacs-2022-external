import transpService from '../services/transpService';

export default class TranspController {
  async getAll(req, res) {
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
  }

  async get(req, res) {
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
  }

  async select(req, res) {
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
  }
}
