
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";

export const GenerateTicketComponents = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const userId = localStorage.getItem("id");
    
      const submitData = (data) => {
        console.log(data);
      };
    
      return (
        <div>
          <div
            className="container-xxl py-5 px-0 wow mt-5 fadeInUp"
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
                    // className="btn-play"
                    data-bs-toggle="modal"
                    data-bs-target="#videoModal"
                  >
                    <span />
                  </button>
                  {/* <video src="../img/final_video.mp4" style={{width:660.2 , height:660}}></video> */}
                </div>
              </div>
              <div
                className="col-md-6 d-flex align-items-center justifyContet"
                style={{ backgroundColor: "#461111" }}
              >
                <div
                  className="p-5 wow fadeInUp"
                  data-wow-delay="0.2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  <h1
                    className=" mb-4 "
                    style={{
                      fontFamily: "Metal Mania",
                      fontSize: 50,
                      color: "#FEA116",
                    }}
                  >
                    BOOK YOUR TICKET{" "}
                  </h1>
                  <form onSubmit={handleSubmit(submitData)}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <select
                            class="form-select"
                            id="exampleDataList"
                            {...register("events")}
                          >
                            <option selected>Select Team 1</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <select
                            class="form-select"
                            id="exampleDataList"
                            {...register("match")}
                          >
                            <option selected>Select team 2</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <select
                            class="form-select"
                            id="exampleDataList"
                            {...register("seeat_type")}
                          >
                            <option selected>Select Events</option>
                            <option value="1">Premium</option>
                            <option value="2">Non Premium</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <select
                            class="form-select"
                            id="exampleDataList"
                            {...register("status")}
                          >
                            <option selected>Select status</option>
                            <option value="Live">Live</option>
                            <option value="Finished">Finished</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="venue"
                            placeholder="Enter venue"
                            {...register("venue", { required: true })}
                          />
                          <label
                            htmlFor=""
                            style={{ fontFamily: "Calibri", fontSize: 18 }}
                          >
                            Enter Venue
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="date"
                            className="form-control"
                            id="date"
                            placeholder="Enter venue"
                            {...register("venue", { required: true })}
                          />
                          <label
                            htmlFor=""
                            style={{ fontFamily: "Calibri", fontSize: 18 }}
                          >
                            Enter Date
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="time"
                            className="form-control"
                            id="time"
                            placeholder="Enter Time"
                            {...register("time", { required: true })}
                          />
                          <label
                            htmlFor=""
                            style={{ fontFamily: "Calibri", fontSize: 18 }}
                          >
                            Enter time
                          </label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="score"
                            placeholder="Enter Time"
                            {...register("score", { required: true })}
                          />
                          <label
                            htmlFor=""
                            style={{ fontFamily: "Calibri", fontSize: 18 }}
                          >
                            Enter Score
                          </label>
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
                        <button
                          className="btn btn-primary w-100"
                          type="submit"
                          style={{
                            fontFamily: "Metal Mania",
                            fontSize: 30,
                            borderRadius: 60,
                            justifyContent: "center",
                          }}
                        >
                          Login
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}


