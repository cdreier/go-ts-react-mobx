import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './src/App'

// import * as mobx from 'mobx'
// mobx.useStrict(true)

declare const module: any

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
      <RootElement />
    </AppContainer>,
    document.getElementById('mount'),
  )
}
