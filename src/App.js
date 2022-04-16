import { Route, Routes } from 'react-router-dom'
import Booking from './Pages/Home/Booking/Booking'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login/Login'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destination/:id" element={<Booking />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App
