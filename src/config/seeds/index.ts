import ShowSeed from './shows';
import StaySeed from './stays';
import TranspSeed from './transp';

export default () =>
  Promise.all([
    // Returning and thus passing a Promise here
    // Independent seeds first
    ShowSeed(),
    StaySeed(),
    TranspSeed(),
  ])
    .then(() => {
      // More seeds that require IDs from the seeds above
    })
    .then(() => {
      console.log('********** Successfully seeded db **********');
    });
