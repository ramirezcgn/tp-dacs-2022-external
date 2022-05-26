const routes = {
  // shows
  'GET /show/': 'ShowController.getAll',
  'GET /show/:id': 'ShowController.get',
  'POST /show/:id': 'ShowController.select',
  // stays
  'GET /stay/': 'StayController.getAll',
  'GET /stay/:id': 'StayController.get',
  'POST /stay/:id': 'StayController.select',
  // transport
  'GET /transp/': 'TranspController.getAll',
  'GET /transp/:id': 'TranspController.get',
  'POST /transp/:id': 'TranspController.select',
};

export default routes;
