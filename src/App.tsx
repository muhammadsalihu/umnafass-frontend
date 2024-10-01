import { Routes, Route } from "react-router-dom"
import Home from "./pages/index.tsx"
import About from "./pages/about/index.tsx"
import Contact from "./pages/contact/index.tsx"
import Store from "./pages/store/index.tsx"
import Dashboard from "./pages/dashboard/index.tsx"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/store" element={<Store />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
