import React from 'react'
import Counter from './Counter'
import {Provider } from "react-redux"
import {store} from "../Redux/Store"
const App = () => {
  return (
    <div>
        <Provider store={store}>
            <Counter/>
        </Provider>
    </div>
  )
}

export default App