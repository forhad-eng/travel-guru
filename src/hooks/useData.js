import { useEffect, useState } from 'react'

const useData = () => {
    const [destination, setDestination] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('https://raw.githubusercontent.com/forhad-eng/travel-guru-data/main/data.json')
            const data = await res.json()
            setDestination(data)
        }

        fetchData()
    }, [])

    return [destination]
}

export default useData
