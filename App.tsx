import React from 'react';
import UserContextProvider from 'src/context/userContext';
import Navigation from 'src/navigation';

function App(): JSX.Element {
  return (
    <UserContextProvider>
      <Navigation />
    </UserContextProvider>
  );
}

export default App;
