import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const AdminEventDetail = () => {
    const eventId  = useParams().eventId;
    console.log(eventId)
    const [teams, setteams] = useState([])
    const getTeamData = async () => {
        const res = await axios.get("/team/get/"+eventId)
        console.log(res.data.team)
        setteams(res.data.team)

    }
    useEffect(() => {
        getTeamData()
    }, [])
    
  return (
    <div>
        
        
    </div>
  );
}
