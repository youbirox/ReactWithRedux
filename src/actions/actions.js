export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const ADD_COMPTE = 'ADD_COMPTE';
export const REMOVE_COMPTE = 'REMOVE_COMPTE';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION';
export const SHOW_ALL = 'SHOW_ALL';

export function addUser(id, nom,prenom,age,sex) {
  return { type: ADD_USER, id: id, nom: nom , prenom:prenom , age:age, sex:sex};
}

export function removeUser(id) {
  return { type: REMOVE_USER, id: id };
}

export function addCompte(id, user_id,balance) {
    return { type: ADD_COMPTE, id: id, user_id: user_id , balance:balance };
  }
  
  export function removeCompte(id) {
    return { type: REMOVE_COMPTE, id: id };
  } 

  export function addTransaction(id, compte_id,balance,date,cash_flow) {
    return { type: ADD_TRANSACTION, id: id, compte_id: compte_id , balance:balance,date:date,cash_flow:cash_flow };
  }
  
  export function removeTransaction(id) {
    return { type: REMOVE_TRANSACTION, id: id };
  } 

export function showAll() {
  return { type: SHOW_ALL };
}