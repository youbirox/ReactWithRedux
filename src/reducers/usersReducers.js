import { ADD_USER,REMOVE_USER } from '../actions/actions';




function usersReducer(users = [], action) {
    switch (action.type) {
      case ADD_USER:
        return [
          ...users,
          {
            id: action.id,
            nom: action.nom,
            prenom: action.prenom,
            age: action.age,
            sex: action.sex
          },
        ];
  
      case REMOVE_USER:
        return users.filter((user, index) => index != action.id);
  
      default:
        return users;
    }
  }
  
  export default usersReducer;