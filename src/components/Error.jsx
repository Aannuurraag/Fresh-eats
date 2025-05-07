import { useRouteError } from "react-router"
const Error = () => {
    const error=useRouteError()
    //console.log(error.error.message)
    
  return (
    <div>
        <h3>{error.error}</h3>
        <h3>{error.status}</h3>
    </div>

  )
}

export default Error