import React, {createContext, useReducer} from 'react';
import authInitialState from './initialsState/authState';
import contactsInitialState from './initialsState/contactsInitialState';
import auth from './reducers/auth';
import contacts from './reducers/contacts';

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const [authState, authDispath] = useReducer(auth, authInitialState);
  const [contactsState, contactsDispath] = useReducer(
    contacts,
    contactsInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{authState, contactsState, authDispath, contactsDispath}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
