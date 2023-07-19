import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UserLoginComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  var navigate = useNavigate();
  const submit = async (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };
    console.log(user);
    const res = await axios.post("user/user/login", user);
    console.log(res.data);
    if (res.data.data === null || res.data.data === undefined) {
      toast.error('wrong credentials!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      if (res.data.data.role.name === "admin") {
        localStorage.setItem("id", res.data.data._id);
        navigate("/admin");
      } else {
        localStorage.setItem("id", res.data.data._id);
        toast('Login success!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
          setTimeout(() => {
            navigate("/user");    
          }, 3000);
        
      }
    }
  };
  return (
    // <div>
    //   <form onSubmit={handleSubmit(submit)}>
    //     <input
    //       type="text"
    //       placeholder="Name"
    //       {...register("email", { required: true })}
    //     />
    //     <input
    //       type="text"
    //       placeholder="Name"
    //       {...register("password", { required: true })}
    //     />
    //     <input type="submit" value="LOGIN User" />
    //   </form>
    // </div>
    <>
      <Helmet>
     <link
          href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap"
          rel="stylesheet"
        />
     </Helmet>
   
    <div
      className="container-xxl py-5 px-0 wow fadeInUp"
      data-wow-delay="0.1s"
      style={{
        visibility: "visible",
        animationDelay: "0.1s",
        animationName: "fadeInUp",
      }}
    >
      <div className="row g-0" >
        <div className="col-md-6">
          <div className="video">
            <button
              type="button"
              // className="btn-play"
              data-bs-toggle="modal"
              
              data-bs-target="#videoModal"
            >
              <span />
            </button>
            {/* <video src="../img/final_video.mp4" style={{width:660.2 , height:660}}></video> */}
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justifyContet" style={{backgroundColor:'#461111'}}>
          <div
            className="p-5 wow fadeInUp"
            data-wow-delay="0.2s"
            style={{
              visibility: "visible",
              animationDelay: "0.2s",
              animationName: "fadeInUp",
            }}
          >
            <h1 className=" mb-4 " style={{fontFamily: 'Metal Mania', fontSize: 50 , color:'#FEA116'}}>LOGIN </h1>
            <form onSubmit={handleSubmit(submit)}>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      {...register("email", { required: true })}
                    />
                    <label htmlFor="name" style={{ fontFamily: "Calibri", fontSize: 18 }}>Enter Email</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Your password"
                      {...register("password", { required: true })}
                    />
                    <label htmlFor="email" style={{ fontFamily: "Calibri", fontSize: 18 }}>Enter Password</label>
                  </div>
                </div>
                <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
                {/* Same as */}
                <ToastContainer />

                <div className="col-12">
                  <button className="btn btn-primary w-100" type="submit" style={{fontFamily: 'Metal Mania', fontSize: 30, borderRadius:60 , justifyContent:'center'}}>
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
