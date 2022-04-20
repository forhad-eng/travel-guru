import React from 'react'

const SingleDest = ({ pic, title, des, rating, price }) => {
    return (
        <div className="grid grid-cols-2 gap-5">
            <img style={{ width: '270px', height: '188px' }} src={pic} alt="" />
            <div>
                <p className="text-lg font-semibold">{title}</p>
                <p className="text-gray-500">{des}</p>
                <div className="flex justify-between leading-9">
                    <p className="font-semibold">⭐{rating}</p>
                    <p>
                        <span className="font-semibold">${price}</span>/<span className="text-gray-500">night</span>{' '}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SingleDest
