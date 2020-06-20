export const addEvent = (details) => {
    return {
      type: 'ADD_EVENT',
      details: details,
    };
  };
  export const addUser = (details) => {
    return {
      type: 'ADD_USER',
      details: details,
    };
  };
  
  export const update = (details, key) => {
    return {
      type: 'UPDATE_EVENT',
      details: details, 
      id: key,
    };
  };
  export const remove = (key) => {
    return {
      type: 'REMOVE_EVENT',
      id: key,
    };
  };
  export const login = (data) => {
    return {
      type: 'LOGIN',
      datas: data,
    };
  };
  export const makingAdmin = () => {
    return {
      type: 'MAKE_ADMIN',
      
    };
  };
  