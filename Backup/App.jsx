import React from 'react'
import Message from './Message'
import {Provider} from "react-redux"
import {store} from "./Redux/Store"
const App = () => {
  return (
    <div>
      <Provider store={store}>
      <Message/>
      </Provider>
    </div>
  )
}

export default App