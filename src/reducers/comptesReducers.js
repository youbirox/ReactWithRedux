import { ADD_COMPTE, REMOVE_COMPTE } from '../actions/actions';




function comptesReducer(comptes = [], action) {
    switch (action.type) {
      case ADD_COMPTE:
        return [
          ...comptes,
          {
            id: action.id,
            user_id: action.user_id,
            balance: action.balance
          },
        ];
  
      case REMOVE_COMPTE:
        return comptes.filter((compte, index) => index != action.id);
  
      default:
        return comptes;
    }
  }
  
  export default comptesReducer;