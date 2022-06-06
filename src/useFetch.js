import { useState, useEffect} from "react";

const dataFetch = async function(url){
  try{
    const response = await fetch(url);

    if(!response.ok) throw new Error("Can't fetch resources.");

    const results = await response.json();

    return results;
  }
  catch(error){
    throw error;
  }
}

const useFetch = function(url){
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() =>{
      setErrorMessage(null)

      dataFetch(url)
      .then((data)=> {
        setErrorMessage(null)
        setData(data)
      })
      .then(()=> setIsPending(false))
      .catch((error)=> {
        setErrorMessage(error.message);
        setIsPending(false);
      })
  }, [])

  return {data, isPending, errorMessage};

}

export default useFetch;