in the following three files replace the _GOOGLE_API_KEY_ with the google api key<br />

/android/app/src/main/AndroidManifest.xml<br />
/ios/technicalEvaluation/AppDelegate.mm<br />
/ios/technicalEvaluation/Info.plist<br />

the structure of the app is as follows<br />
src/<br />
----/assets -- all static images are hosted<br />
----/components -- general components used in various pages<br />
----/constants -- constants used throughout the app<br />
----/context -- contexts created for global state management<br />
----/dommyData -- example data<br />
----/hooks -- interfaces for handling data in this case database<br />
----/pages -- pages of the app, which have the following structure<br />
--------/pageFolder<br />
------------/components -- components used exclusively for the site<br />
------------index.tsx -- the input file of the page<br />
----/types -- general app data types<br />
----/utils -- general utilities, e.g. responsive sizing management<br />
----/navigation.tsx -- app navigation through pages<br />
