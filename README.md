in the following three files replace the _GOOGLE_API_KEY_ with the google api key

/android/app/src/main/AndroidManifest.xml
/ios/technicalEvaluation/AppDelegate.mm
/ios/technicalEvaluation/Info.plist

the structure of the app is as follows
src/
----/assets -- all static images are hosted
----/components -- general components used in various pages
----/constants -- constants used throughout the app
----/context -- contexts created for global state management
----/dommyData -- example data
----/hooks -- interfaces for handling data in this case database
----/pages -- pages of the app, which have the following structure
--------/pageFolder
------------/components -- components used exclusively for the site
------------index.tsx -- the input file of the page
----/types -- general app data types
----/utils -- general utilities, e.g. responsive sizing management
----/navigation.tsx -- app navigation through pages
