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

      const axiosClient = axios.create({
        baseURL : process.env.BASE_URL
      });
      
      const res = await axios.post(`${BASE_URL}/early_subscriptions`, fd)

      console.log(JSON.stringify(res))
      // return res
    }
    catch (err) {
      console.log(err)
      setError(err)
    } finally { setIsPending(false) }
  }
  /*
  Execute Req
  */

  return { executeReq }
}

export default useAxios