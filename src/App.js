import React, { useState } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import HomeView from './HomeView'
import CategorySelectionView from './CategorySelectionView'
import NewEntryView from './NewEntryView'

const App = () => {
  //Getter, setter  //Define state. Initial state of home.
  // const [page, setPage] = useState("home")

  return (
    
    <div>
      <BrowserRouter>
        <Route path="/" component={HomeView} />
        <Route path="/category" component={CategorySelectionView} />
        <Route path="/entry" component={NewEntryView} />
      </BrowserRouter>
    </div>
  )
}

export default App
