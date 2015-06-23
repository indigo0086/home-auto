# home-auto
Home automation display and server to test modern ui frameworks.

# Prerequisites
Before running ensure you have node v0.12.5 and npm v2.7.4 or compatible version

Ensure you have the necessary packages by running the commands:

    npm install -g gulp
    npm install -g karma
    npm install -g bower

To initialize application

    npm install

To run Tests

    npm test
    
To Start application

    npm start
    
If you are having trouble with npm intall due to EACCESS involving the .npm folder in home
you may need to regain ownership of the folder using the following (whoami is not a placeholder):

    sudo chown -R $(whoami) ~/.npm/
    
    
If the install process fails you may need to manually install each package

    npm install
    cd ha-web
    npm install
    bower install
