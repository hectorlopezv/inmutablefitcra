import { Navigate } from "react-router-dom"

/**
 * Redirecting if user tries to enter not valid url
 * @param {children}  if any children is present redirect
 * @return {Component} Redirect component
 */
const PrivateRoute = ({ children }) =>{
    
    return children ? children : <Navigate to="/" />;
}
  
export default PrivateRoute;