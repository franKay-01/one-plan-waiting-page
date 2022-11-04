import { useState } from "react"
import axios from "axios"

const useAxios = () => {
  const BASE_URL = "http://20.71.168.76:1027/api/v1"
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)

  /*
  Execute Req
  */
  const executeReq = async (body) => {
    
    try {
      const fd = new FormData()
      fd.append('email', body)
      
      const res = await axios.post(`${BASE_URL}/early_subscriptions`, fd)

      console.log(" RESPONSE "+JSON.stringify(res))

      // return res
    }
    catch (err) {
      console.log(err)
      setError(err)
    } finally { setIsPending(false) }

    try {
      axios.post(`${BASE_URL}/early_subscriptions`, {
          method: 'POST',
          body: JSON.stringify({
              email: body
          }),
          headers: {
              "Content-type": "application/json; charset=UTF-8"
          }
      }).then(response => JSON.stringify(response))
        .then(json => console.log(json));
    } catch (error) {
        console.warn(error);
    }
  }
  /*
  Execute Req
  */

  return { executeReq }
}

export default useAxios