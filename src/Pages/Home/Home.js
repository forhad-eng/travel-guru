import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useData from '../../hooks/useData'
import logo from '../../images/logo.png'
import '../../Styles/Home.css'
import Header from '../Shared/Header/Header'
let index = 1

const Home = () => {
    const [destination] = useData()
    const [newDest, setNewDest] = useState([])
    const [place, setPlace] = useState({})

    useEffect(() => {
        setNewDest(destination?.slice(0, 2))
    }, [destination])

    const leftHandler = () => {
        const firstPlace = destination[index]
        const secondPlace = destination[index === 3 ? 0 : index + 1]
        const newPlaces = [firstPlace, secondPlace]
        setNewDest(newPlaces)
        setPlace(firstPlace)

        index++
        if (index === 4) {
            index = 0
        }
    }

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
                        <button className="py-3 px-7 bg-[#F9A51A] rounded-lg text-black font-semibold outline-none">
                            Booking <ArrowRightIcon className="inline h-5 w-5" />
                        </button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-9 items-center">
                    {newDest.map((place, index) => {
                        const { name, img } = place
                        return (
                            <div
                                key={index}
                                className={`relative ${
                                    index === 0 ? 'border-4 rounded-3xl border-orange-400' : 'border-none'
                                }`}
                            >
                                <img src={img} alt="" />
                                <p className="absolute bottom-8 left-6 text-3xl uppercase font-bold">{name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="flex justify-center gap-2 my-8">
                <button onClick={leftHandler} className="h-7 w-7 bg-white text-black rounded-full outline-none">
                    <ChevronLeftIcon />
                </button>
                <button onClick={leftHandler} className="h-7 w-7 bg-white text-black rounded-full outline-none">
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    )
}

export default Home
