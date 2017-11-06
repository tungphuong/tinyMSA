import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import * as RoutesModule from './routes';

import './css/site.css';

// Styles
// Import Font Awesome Icons Set
//import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
//import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.scss'
// Temp fix for reactstrap
import './scss/core/_dropdown-menu-right.scss'

let routes = RoutesModule.routes;

function renderApp() {
    // This code starts up the React app when it runs in a browser. It sets up the routing
    // configuration and injects the app into a DOM element.
    const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
    ReactDOM.render(
        <AppContainer>
            <BrowserRouter children={ routes } basename={ baseUrl } />
        </AppContainer>,
        document.getElementById('react-app')
    );
}

renderApp();

// Allow Hot Module Replacement
if (module.hot) {
    module.hot.accept('./routes', () => {
        routes = require('./routes').routes;
        renderApp();
    });
}
