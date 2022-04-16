import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useData from '../../hooks/useData'
import logo from '../../images/logo.png'
import '../../Styles/Home.css'
import Header from '../Shared/Header/Header'

const Home = () => {
    const [destination] = useData()
    const [place, setPlace] = useState({})

    return (
        <div className="banner">
            <Header>{logo}</Header>
            <div className="grid md:grid-cols-2 gap-10 items-center px-10 md:px-20">
                <div>
                    <p className="text-6xl uppercase font-bold mb-8">
                        {place?.name ? place?.name : destination[0]?.name}
                    </p>
                    <p className="mb-8">
                        <small>
                            {place?.description
                                ? place?.description.slice(0, 200)
                                : destination[0]?.description.slice(0, 200)}
                        </small>
                    </p>
                    <Link to={`/destination/${place?.id ? place?.id : destination[0]?.id} `}>
                        <button className="flex items-center py-3 px-7 bg-[#F9A51A] rounded-lg text-black font-semibold outline-none">
                            Booking <ArrowRightIcon className="h-5 w-5 ml-2" />
                        </button>
                    </Link>
                </div>
                <div className="grid md:grid-cols-2 gap-9 items-center">
                    {destination.slice(0, 2).map((place, index) => {
                        const { name, img } = place
                        return (
                            <div onClick={() => setPlace(place)} className="relative">
                                <img src={img} alt="" />
                                <p className="absolute bottom-8 left-6 text-3xl uppercase font-bold">{name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex justify-center gap-2 my-8">
                <button className="h-7 w-7 bg-white text-black rounded-full outline-none">
                    <ChevronLeftIcon />
                </button>
                <button className="h-7 w-7 bg-white text-black rounded-full outline-none">
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    )
}

export default Home
