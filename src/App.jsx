import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import RecipeDetails from './pages/RecipeDetails'
import { RecipeProvider } from './contexts/RecipeContext'
import Categories from './pages/Categories'

const App = () => {
  return (
    <RecipeProvider>
      <div className='min-h-screen bg-bg-cream'>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/recipe/:id' element={<RecipeDetails />} />
            <Route path='/categories/:categoryName' element={<Categories />} />
          </Routes>
        </main>
      </div>
    </RecipeProvider>
  )
}

export default App