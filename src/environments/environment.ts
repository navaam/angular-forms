// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyCJ4PAEaGAdG7j5nwpRoV-cafq1LJMRwDA",
    authDomain: "todolistdb-27857.firebaseapp.com",
    databaseURL: "https://todolistdb-27857.firebaseio.com",
    projectId: "todolistdb-27857",
    storageBucket: "todolistdb-27857.appspot.com",
    messagingSenderId: "853626361865"
  }
};
