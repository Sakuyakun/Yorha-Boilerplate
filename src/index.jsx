import React from 'react'
import ReactDOM from 'react-dom'
import Routers from './routers.jsx'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { viewReducer } from './reducers/index.jsx'
import normalize from './normalize.scss'

// store
const myMiddleware = store => next => action => {
  console.log('这是自定义中间件方法')
  let result = next(action)
  return result
}
const combine = combineReducers({ viewReducer })
const store = createStore(combine, applyMiddleware(myMiddleware))

// render
const rootEle = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
      <Routers />
  </Provider>,
  rootEle
);