import React from 'react'
import useData from '../../hooks/useData'
import '../../Styles/Home.css'
import Header from '../Shared/Header/Header'

const Home = () => {
    const [destination] = useData()
    return (
        <div className="banner">
            <Header />
            <p>total destination {destination.length}</p>
        </div>
    )
}

export default Home
