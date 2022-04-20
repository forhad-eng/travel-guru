import React from 'react'
import logo from '../../../images/logo2.png'
import pic1 from '../../../images/Rectangle 26.png'
import pic2 from '../../../images/Rectangle 27.png'
import pic3 from '../../../images/Rectangle 28.png'
import Header from '../../Shared/Header/Header'
import Map from '../../Shared/Map/Map'
import SingleDest from '../SingleDest/SingleDest'

const Destination = () => {
    return (
        <div>
            <Header>{logo}</Header>
            <div className="grid grid-cols-2 gap-10 px-16 py-6">
                <div className="grid grid-cols-1 gap-5">
                    <SingleDest
                        pic={pic1}
                        title="Light bright airy stylish apt &amp; safe 
                    peaceful stay"
                        des="4 guests 2 bedrooms 2 beds 2 baths Wif Air conditioning Kitchen Cancellation fexibility availiable"
                        rating="4.9(20)"
                        price="34"
                    />
                    <SingleDest
                        pic={pic2}
                        title="Light bright airy stylish apt &amp; safe 
                    peaceful stay"
                        des="4 guests 2 bedrooms 2 beds 2 baths Wif Air conditioning Kitchen Cancellation fexibility availiable"
                        rating="4.8(10)"
                        price="52"
                    />
                    <SingleDest
                        pic={pic3}
                        title="Light bright airy stylish apt &amp; safe 
                    peaceful stay"
                        des="4 guests 2 bedrooms 2 beds 2 baths Wif Air conditioning Kitchen Cancellation fexibility availiable"
                        rating="4.9(25)"
                        price="44"
                    />
                </div>
                <div>
                    <Map/>
                </div>
            </div>
        </div>
    )
}

export default Destination
