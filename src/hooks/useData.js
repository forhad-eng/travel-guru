import { useEffect, useState } from 'react'

const useData = () => {
    const [destination, setDestination] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('./data.json')
            const data = await res.json()
            setDestination(data)
        }

        fetchData()
    }, [])

    return [destination]
}

export default useData
