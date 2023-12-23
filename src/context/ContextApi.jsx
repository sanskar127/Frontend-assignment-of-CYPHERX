import React, { useEffect, createContext, useState } from "react"
import axios from "axios"

const AxiosDataContext = createContext()

const ContextApi = ({ children }) => {
  const [apiData, setApiData] = useState(null)

  useEffect(() => {
    axios
      .get("https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers")
      .then((response) => {
        setApiData(response.data)
      })
      .catch((error) => console.log("Error Occurred: " + error))
  }, [])

  return (
    <AxiosDataContext.Provider value={apiData}>
      {children}
    </AxiosDataContext.Provider>
  )
}

export { AxiosDataContext,ContextApi }
