import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  isAllowed: boolean,
  redirectPath: string,
  children:ReactNode
  data?: unknown,
  
}
// to prevent user from reaching to specific routes without login 
const ProtectedRoute = ({isAllowed,redirectPath,children,data}:IProps) => {
  if (!isAllowed) return <Navigate to={redirectPath} replace state={data}/>
  return children
}

export default ProtectedRoute;