import util from 'util';

const initialState = {
  create: 20,
  update: 40,
  delete: 10,
}

const reducer = (state = initialState, action) => {
  let { type , payload } = action;
  
  switch (type){
    case "DELETE":{
      let newState = {
        ...state,
        delete: state.delete + 1,
      }  
      return newState;
    }

    case "UPDATE":{
      let newState = {
        ...state,
        update: state.update + 1,
      }  
      return newState;
    }
    case "CREATE":{
      let newState = {
        ...state,
        create: state.create + 1,
      }  
      return newState;
    }
    default:
      return state;
  }
}

export default reducer;