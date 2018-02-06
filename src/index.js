import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from "react-hot-loader";
import { Provider } from 'react-redux'
import store from './redux/store'

import { BrowserRouter as Router } from 'react-router-dom'

import App from 'components/App/app'
// import Home from './components/Home/index'

renderWithHotReload(App)

if (module.hot) {
    module.hot.accept('components/App/app', () => {
        const NextApp = require('components/App/app').default;
        renderWithHotReload(NextApp);
    })
}

function renderWithHotReload(RootElement) {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <RootElement />
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}