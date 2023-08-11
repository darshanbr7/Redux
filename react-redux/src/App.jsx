import React from 'react'
import Counter from './CounterRedux/Counter'
import { store } from './CounterRedux/Strore'
import {Provider} from "react-redux"

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