import { ADD_TRANSACTION,REMOVE_TRANSACTION } from '../actions/actions';




function transactionReducer(transactions = [], action) {
    switch (action.type) {
      case ADD_TRANSACTION:
        return [
          ...transactions,
          {
            id: action.id,
            compte_id: action.compte_id,
            balance: action.balance,
            date: action.date,
            cash_flow: action.cash_flow
          },
        ];
  
      case REMOVE_TRANSACTION:
        return transactions.filter((transactions, index) => index != action.id);
  
      default:
        return transactions;
    }
  }
  
  export default transactionReducer;