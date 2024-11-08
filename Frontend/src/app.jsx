import './app.css'
import HeaderComponent from './Components/HeaderComponent'
import MainComponent from './Components/MainComponent'
import FooterComponent from './Components/FooterComponent'
import { BrowserRouter, Routes, Route } from "react-router-dom"
export function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
            <Routes>
                <Route path='' element={<MainComponent/>}> </Route>
            </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}
