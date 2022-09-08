import showService from '../services/showService';

export default class ShowController {
  async getAll(req, res) {
    try {
      const shows = await showService().getAll();
      if (!shows) {
        return res.status(400).json({ msg: 'Bad Request: Models not found' });
      }
      return res.status(200).json({ shows });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  async get(req, res) {
    try {
      const show = await showService().get(req.params.id);
      if (!show) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ show });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  }

  async select(req, res) {
    try {
      const show = await showService().select(req.params.id, parseInt(req.body.places, 10));
      if (!show) {
        return res.status(400).json({ msg: 'Bad Request: Model not found' });
      }
      return res.status(200).json({ show });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  }
}

