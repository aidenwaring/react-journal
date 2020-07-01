import React, { useState } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import HomeView from './HomeView'
import CategorySelectionView from './CategorySelectionView'
import NewEntryView from './NewEntryView'

const App = () => {
  //Getter, setter  //Define state. Initial state of home.
  const [page, setPage] = useState("home")

  return (
    
    <div>
      
    </div>
  )
}

export default App
