import React from 'react'
import CategorySelectionView from './CategorySelectionView'
import NewEntryView from './NewEntryView'
import HomeView from './HomeView'

const App = () => {
  return (
    <div >
          <HomeView />
          <CategorySelectionView />
          <NewEntryView />
    </div>
  )
}

export default App
