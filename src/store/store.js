import { createStore } from 'redux';
import reducers from '../reducers/reducers';

let initialState = {
  User: [
    { id: '1', nom: 'No, wait, I meant legendary!',prenom:'ffff',age:'51',sex:'h' },
    { id: '2', nom: 'No, wait, I meant legendary!',prenom:'ffff',age:'51',sex:'h' },
  ],
  Compte: [
    { id: '1', user_id: '1',balance:'772' },
    { id: '2', user_id: '2',balance:'272' },
  ],
  Transaction: [
    { id: '1', compte_id: '1',balance:'772',date:'772',cash_flow:'772' },
    { id: '1', compte_id: '1',balance:'772',date:'772',cash_flow:'772' },
  ],
  visibility: 'AWESOME_TAG',
};

export default createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);