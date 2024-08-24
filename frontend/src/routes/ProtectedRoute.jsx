import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../context/authContexts"


function ProtectedRoute({children , allowedRoles}) {

    const {token , role} = useContext(AuthContext)

    const isAllowed = allowedRoles.includes(role)
    const accessibleRoute = token && isAllowed ? children : <Navigate to='/login' replace={true}/>

  return  accessibleRoute;
}

export default ProtectedRoute