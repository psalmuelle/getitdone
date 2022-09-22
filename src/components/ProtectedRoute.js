import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute=(props)=>{
 const authenticated = useSelector((state)=> state.user.authenticated)
 const navigate = useNavigate()

 useEffect(()=>{
 if (!authenticated){
    navigate("/")
 }
 },[])

if (authenticated){
    return (
        props.children
    )
}


}

export default ProtectedRoute