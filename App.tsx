import React from 'react';
import UserContextProvider from 'src/context/userContext';
import Navigation from 'src/navigation';

/* in this file you define the Provider that will host
the variable when the user is logged
in or not, you could add many more
session variables and even save a token. */

//the structure of the app is as follows
/* src/
      /assets -- all static images are hosted
      /components -- general components used in various pages
      /constants -- constants used throughout the app
      /context -- contexts created for global state management
      /dommyData -- example data
      /hooks -- interfaces for handling data in this case database
      /pages -- pages of the app, which have the following structure
        /pageFolder
          components -- components used exclusively for the site
          index.tsx -- the input file of the page
      /types -- general app data types
      /utils -- general utilities, e.g. responsive sizing management
      navigation.tsx -- app navigation through pages
*/

function App(): JSX.Element {
  return (
    <UserContextProvider>
      <Navigation />
    </UserContextProvider>
  );
}

export default App;
