import { Route, Routes } from 'react-router-dom'
import Booking from './Pages/Home/Booking/Booking'
import Home from './Pages/Home/Home'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destination/:id" element={<Booking />} />
            </Routes>
        </div>
    )
}

export default App
