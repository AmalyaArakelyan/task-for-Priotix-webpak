//reducers
import { TournamentReducer } from './Tournament/TournamentReducer.js';
import { SearchReducer } from './Search/SearchReducer';

const rootReducer = {
  tournament: TournamentReducer,
  search:SearchReducer
};

export default rootReducer;
