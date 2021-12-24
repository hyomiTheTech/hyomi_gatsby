import React, {useState, useEffect} from 'react'

const List = () => {
    const [data, getData] = useState([])

    useEffect(() => {
        fetch()
    }, [])

    return (
        <div>
            {data.map(data => (
                <li key={data.id}>{data.name}</li>
            ))}
        </div>
    )
}