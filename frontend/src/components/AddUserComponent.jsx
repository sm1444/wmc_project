import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const AddUserComponent = () => {
    var navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submit = async (data) => {
    const user = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      role: "64a8d6aeaf3621872f915d3d",
    };

    const res = await axios.post("http://localhost:5000/user/user", user);
    console.log(res.data.data);
    console.log(res.status);
    if(res.status===201){
        alert("user added successfully");
        navigate("/login");
    }
    else{
        alert("something went wrong");
    }


    //api
  };
  return (
    // <div>
    //     <form onSubmit={handleSubmit(submit)}>
    //         <input type="text" placeholder="Name" {...register("firstName", {required: true})} />
    //         <input type="text" placeholder="Name" {...register("lastName", {required: true})} />
    //         <input type="text" placeholder="Name" {...register("email", {required: true})} />
    //         <input type="text" placeholder="Name" {...register("password", {required: true})} />
    //         <input type="submit" value="add user"/>
    //     </form>
    // </div>
    <div
      className="container-xxl py-5 px-0 wow fadeInUp"
      data-wow-delay="0.1s"
      style={{
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeInUp",
      }}
    >
      <div className="row g-0">
        <div className="col-md-6">
          <div className="video">
            <button
              type="button"
              className="btn-play"
              data-bs-toggle="modal"
              data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
              data-bs-target="#videoModal"
            >
              <span />
            </button>
          </div>
        </div>
        <div className="col-md-6 bg-dark d-flex align-items-center">
          <div
            className="p-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp",
            }}
          >
            <h5 className="section-title ff-secondary text-start text-primary fw-normal">
              Reservation
            </h5>
            <h1 className="text-white mb-4">SIGNUP AS USER</h1>
            <form onSubmit={handleSubmit(submit)}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="First Name"
                      {...register("firstName", { required: true })}
                    />
                    <label htmlFor="name">First Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      {...register("email", { required: true })}
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="form-floating date"
                    id="date3"
                    data-target-input="nearest"
                  >
                    <input
                      type="text"
                      className="form-control datetimepicker-input"
                      id="datetime"
                      placeholder="Last Name"
                      data-target="#last-name"
                      {...register("lastName", { required: true })}
                    />
                    <label htmlFor="datetime">Last Name</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div
                    className="form-floating date"
                    id="date3"
                    data-target-input="nearest"
                  >
                    <input
                      type="password"
                      className="form-control password-input"
                      id="password"
                      placeholder="password"
                      data-target="#password"
                      {...register("password", { required: true })}
                    />
                    <label htmlFor="datetime">Password</label>
                  </div>
                </div>

                {/* <div className="col-12">
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    placeholder="Special Request"
                    id="message"
                    style={{ height: 100 }}
                    defaultValue={""}
                  />
                  <label htmlFor="message">Special Request</label>
                </div>
              </div> */}
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Sign up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
