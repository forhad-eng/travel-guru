import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useData from '../../../hooks/useData'
import Header from '../../Shared/Header/Header'

const Booking = () => {
    const [destination] = useData()
    const { id } = useParams()

    const seletedDest = destination.find(place => place.id === id)

    return (
        <div className="banner">
            <Header />
            <div className="h-fit grid md:grid-cols-2 gap-10 md:mt-16 px-10 md:px-20">
                <div>
                    <p className="text-6xl uppercase font-bold mb-8">{seletedDest?.name}</p>
                    <p>
                        <small>{seletedDest?.description}</small>
                    </p>
                </div>
                <div className="px-20">
                    <form className="bg-white text-black p-5 rounded-md">
                        <label htmlFor="origin">Origin</label>
                        <input
                            className="block bg-gray-200 rounded mb-2 pl-4 p-3 text-sm font-semibold"
                            type="text"
                            name="origin"
                            id="origin"
                            placeholder="Chittagong"
                        />
                        <label htmlFor="destination">Destination</label>
                        <input
                            className="block bg-gray-200 rounded mb-2 pl-4 p-3 text-sm font-semibold"
                            type="text"
                            name="destination"
                            id="destination"
                            placeholder="Sreemangal"
                        />
                        <div className="grid grid-cols-2">
                            <div>
                                <label htmlFor="from">From</label>
                                <input
                                    className="block bg-gray-200 rounded pl-4 p-3 text-sm font-semibold"
                                    type="date"
                                    name="date1"
                                    id="from"
                                />
                            </div>
                            <div>
                                <label htmlFor="to">To</label>
                                <input
                                    className="block bg-gray-200 rounded pl-4 p-3 text-sm font-semibold"
                                    type="date"
                                    name="date2"
                                    id="to"
                                />
                            </div>
                        </div>
                        <Link to="/">
                            <button className="w-full bg-[#F9A51A] py-3 rounded-lg mt-5 font-semibold">
                                Start Booking
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Booking
