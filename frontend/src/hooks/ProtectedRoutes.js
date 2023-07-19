import { Outlet } from "react-router-dom";
import { UserLoginComponent } from "../components/UserLoginComponent";


const useAuth = () =>{
    var flag = localStorage.getItem("id") ? true : false;
    return flag;
}

const ProtectedRoutes = ()=>{
    
    const flag = useAuth();
    return(
        flag? <Outlet/> : <UserLoginComponent/>
    )

}
export default ProtectedRoutes;