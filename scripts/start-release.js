const concurrently = require('concurrently');
const path = require('path');

const browserSyncPath = path.resolve(path.dirname(__filename), '../node_modules/.bin/browser-sync');

concurrently([
    {
        command: `"${browserSyncPath}" public -w --no-online`,
        name: 'SB_BROWSER_SYNC',
        prefixColor: 'bgGreen.bold',
    }
], {
    prefix: 'name',
    killOthers: ['failure', 'success'],
}).then(success, failure);

function success() {
    console.log('Success');
}

function failure() {
    console.log('Failure');
}
