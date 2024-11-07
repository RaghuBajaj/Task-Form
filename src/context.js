import React, { useEffect } from "react";
import { createContext, useState } from "react";

export const PlanContext = createContext();

const PlanContextProvider = (props) =>{
    const [allInfo,setAllInfo] = useState([]);
    const [user,setUser] = useState({
        your_plan:'',
        email:'',
        mobile:'',
        address1:'',
        address2:'',
        pincode:'',
        state:'',
        range:''
    });
    const [page,setPage] = useState(1);
    useEffect(()=>{
        localStorage.setItem("PlanUser",JSON.stringify(user));
    },[user]);
    useEffect(()=>{
        const user_ = JSON.parse(localStorage.getItem("PlanUser"));
        setUser(user_);
    },[]);

    const value={
        allInfo,setAllInfo,user,setUser,page,setPage
    }

    return(
        <PlanContext.Provider value={value}>
            {props.children}
        </PlanContext.Provider>
    )
};

export default PlanContextProvider;
