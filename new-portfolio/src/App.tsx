import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Blog from './components/Blog'
import AddArticle from './components/AddArticle'
import { useState } from 'react'

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  return (
    <BrowserRouter>
      <div className='' onMouseMove={(e) => setMousePos({ x: e.clientX, y: e.clientY })}>
        <Navbar />
        <Routes>
          <Route path='/' element={<Hero x={mousePos.x} y={mousePos.y} />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About x={mousePos.x} y={mousePos.y} />} />
          <Route path='/add-article' element={<AddArticle />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}