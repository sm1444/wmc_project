import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const CreateEvent = (dq) => {
    const{register,handleSubmit,formState:{errors}}=useForm();
    const navigate = useNavigate();
    const createEvent = async(data) => {

        console.log(data);
         const res = await axios.post("event/create", data);
         console.log(res.data);
        //alert("event created successfully");
        navigate("/admin");


    }
  return (
    <div>
      <link
        href="https://demo.dashboardpack.com/architectui-html-free/main.css"
        rel="stylesheet"
      />
      <div className="app-main__inner">
        <div className="row">
          <form onSubmit={handleSubmit(createEvent)}>
            <div class="form-group">
              <label for="exampleInputEmail1">Event name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter event name"
                {...register("name")}
              />
              
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Event Venue</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter event venue"
                {...register("venue")}
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Event Date</label>
              <input
                type="date"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter event name"
                {...register("eventDate")}
              />
              
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Event time</label>
              <input
                type="time"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter event name"
                {...register("eventTime")}
              />      
            </div>

            
            <input type="submit" class="btn btn-primary" value="create event">

            </input>
          </form>
        </div>
      </div>
    </div>
  );
};
