import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'  //只有js和jsx文件可以不加后缀
import {Provider} from 'react-redux'
import store from './pages/Home/Plans/redux/store'

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root'))


