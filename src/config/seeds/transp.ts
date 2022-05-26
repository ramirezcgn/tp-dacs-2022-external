import Transp from '../../models/Transp';

export default () =>
  Transp.bulkCreate(
    [
      {
        idService: 1532,
        name: 'Latam',
        amount: '2500',
        fromDate: '01/06/22',
        toDate: '20/06/22',
        type: 'Plane',
        places: 20,
      },
      {
        idService: 1533,
        name: 'Aerolineas Argentinas',
        amount: '200',
        fromDate: '01/06/22',
        toDate: '20/06/22',
        type: 'Train',
        places: 20,
      },
      {
        idService: 1534,
        name: 'Qatar Airwairs',
        amount: '3500',
        fromDate: '01/06/22',
        toDate: '20/06/22',
        type: 'Bus',
        places: 20,
      },
    ],
    {
      fields: ['idService', 'name', 'amount', 'fromDate', 'toDate', 'type', 'places'],
      ignoreDuplicates: true,
    },
  );
