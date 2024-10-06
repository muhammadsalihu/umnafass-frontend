import { Routes, Route } from "react-router-dom"
import Home from "./pages/index.tsx"
import About from "./pages/about/index.tsx"
import Contact from "./pages/contact/index.tsx"
import Shop from "./pages/shop/index.tsx"
import Product from "./pages/shop/product.tsx"
import Dashboard from "./pages/dashboard/index.tsx"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product"  element={<Product />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
