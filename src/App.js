import { Route, Routes } from 'react-router-dom'
import Booking from './Pages/Home/Booking/Booking'
import Destination from './Pages/Home/Destination/Destination'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login/Login'
import SignUp from './Pages/Login/SignUp/SignUp'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destination/:id" element={<Booking />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </div>
    )
}

export default App
