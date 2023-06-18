//the session context for hosting user data

import React, {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react';

export type DefaultUserContext = {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
};

export const UserContext = createContext<DefaultUserContext | null>(null);

const UserContextProvider: FC<PropsWithChildren> = ({children}) => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <UserContext.Provider value={{isLogged, setIsLogged}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
