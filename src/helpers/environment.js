const APIURL = window.location.hostname; 

switch (window.location.hostname) {
    case 'localhost':
    // case '127.0.0.1':
        APIURL = 'http://localhost:9000'
        break
    // case 'm-gather.herokuapp.com':
    //     APIURL = 'https://jf-gather.herokuapp.com'

}

export default APIURL