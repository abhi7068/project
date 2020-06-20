const intialState = { event: [] };

export const reducer = (state = intialState, action) => {
  console.log(action.details, 'coming from reducer');
  // eslint-disable-next-line
  switch (action.type) {
    case 'ADD_EVENT':
      return {
        ...state,
        event: [...state.event, action.details],
      };
      break;
    case 'UPDATE_EVENT':
      console.log('UPDATE_EVENT', action);
      return {
        event: state.event.map((product, index) => {
          if (index === action.id) {
            return action.details;
          }
          return product;
        }),
      };
      break;
    case 'REMOVE_EVENT':
      console.log('REMOVE_EVENT', action);

      return {
        event: state.event.filter((item,i)=>i!==action.id)
        // (function (item) {
        // return  state.event.indexOf(item) !== action.id;
       // }),
      };
      break;
  }
  return state;
};
export const loginReducer = (
  state = { email: 'garg@gmail.com', password: '1234', isAdmin: false },
  action
) => {
  console.log(action);

  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAdmin:
          action.datas.email === state.email && action.datas.password
            ? (state.isAdmin = true)
            : (state.isAdmin = false),
      };
    // eslint-disable-next-line no-duplicate-case
    case 'MAKE_ADMIN':
      return {
        ...state,
        isAdmin: (state.isAdmin = true),
      };
  }
  return state;
};
const intialStateForUser = { user: [] };
export const userReducer = (state = intialStateForUser, action) => {
  console.log(action.details, 'coming from reducer');
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        user: [...state.user, action.details],
      };
      break;
  }
  return state;
};
