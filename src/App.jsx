import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PageTop from "./layouts/PageTop"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"
import About from "./pages/About"
import ContactUs from "./pages/ContactUs"
import Services from "./pages/Services"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"

function App() {

  return (
    <>

      <PageTop />

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />


      </Routes>

      <Footer />

    </>
  )
}

export default App