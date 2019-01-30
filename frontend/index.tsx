import 'react-hot-loader/patch'
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './src/App'

import { Provider } from 'mobx-react'
import DemoModel from './src/models/DemoModel'

// import * as mobx from 'mobx'
// mobx.useStrict(true)

declare global {
  interface NodeModule { hot : any}
}

const models = {
  demo: new DemoModel(),
}

renderWithHotReload(App)

if (module.hot) {
  module.hot.accept('./src/App', () => {
    const NextRoot = require('./src/App.tsx').default
    renderWithHotReload(NextRoot)
  })
}

function renderWithHotReload(RootElement: any) {
  ReactDOM.render(
    <AppContainer>
      <Provider {...models} >
        <RootElement />
      </Provider>
    </AppContainer>,
    document.getElementById('mount'),
  )
}
