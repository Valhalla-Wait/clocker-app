import { BrowserRouter } from "react-router-dom"
import { TimerConteiner } from "../components/TimerConteiner/index"
import { MainLayout } from "./layouts/mainLayout"

function App() {

  return (
    <BrowserRouter>
      <MainLayout>
        <TimerConteiner />
      </MainLayout>
    </BrowserRouter>
    
    // <BrowserRouter>
    // <Routes>
      
    // </Routes>
    // </BrowserRouter>
  )
}

export default App
