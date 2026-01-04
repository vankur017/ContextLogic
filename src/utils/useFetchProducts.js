import { useState, useEffect } from "react";


export default function useFetchProducts() {

   const [loading, setLoading] = useState(false)
   const [error, setError] = useState();
   const [prodList, setProdList] = useState([])

    useEffect(()=>{

        const fetchResData = async()=>{
            try{
                setLoading(true)
                const data = await fetch("https://dummyjson.com/products");
                const json = await data.json();
                setProdList(json)
            }
            catch(error){
                setError(error)
            }
            finally{
                setLoading(false)
            }
        }
        fetchResData()
    },[])
    return {error, loading, prodList}

}