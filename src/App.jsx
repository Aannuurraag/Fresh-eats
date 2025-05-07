import About from "./components/About"
import { useEffect, useState } from "react"
import Header from "./components/Header"
import { Outlet } from "react-router"
import UserContext from "./utils/UserContext"
import { Provider } from "react-redux"
import appstore from "./utils/appstore"

function App() {

const [userName,setUserName]=useState()

  useEffect(()=>{
  //make an api call and send username and password
const data={
  name:"anurag"
}
setUserName(data.name)
},[])

  return (
    <Provider store={appstore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}} >
      <div>
       <Header/>
       <Outlet/>
      </div> 
      </UserContext.Provider>
      </Provider>
  
  )
}


export default App
