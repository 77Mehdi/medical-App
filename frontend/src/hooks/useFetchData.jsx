import { useState, useEffect } from 'react'
//import { token } from '../config'




function useFetchData(url) {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem("token"); 

           

            try {
                setLoading(true)
                const res = await fetch(url, {
                    headers: { Authorization: `Bearer ${token}` }
                })
        


                const reslt = await res.json()
                if (!res.ok) {
                    throw new Error(reslt.msg)
                }

                setData(reslt.data)
                setLoading(false)

            } catch (err) {
                setLoading(false)
                setError(err.message)
            }
        }

        fetchData()
    }, [url])

    return { data,loading,error}
}



export default useFetchData