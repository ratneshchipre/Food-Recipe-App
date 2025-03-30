import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import RecipeDetails from './pages/RecipeDetails'
import { RecipeProvider } from './contexts/RecipeContext'
import Categories from './pages/Categories'
import Footer from './components/Footer'

const App = () => {
  const location = useLocation();
  const hideFooter = location.pathname.startsWith("/recipe/");

  return (
    <RecipeProvider>
      <div className='min-h-screen flex flex-col bg-bg-cream'>
        <header>
          <Navbar />
        </header>
        <main className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/recipe/:id' element={<RecipeDetails />} />
            <Route path='/categories/:categoryName' element={<Categories />} />
          </Routes>
        </main>
        {!hideFooter &&
          <footer>
            <Footer />
          </footer>
        }
      </div>
    </RecipeProvider>
  )
}

export default App