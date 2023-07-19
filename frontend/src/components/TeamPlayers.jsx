import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

export const TeamPlayers = () => {
  const teamid = useParams().teamId;
  const eventid = useParams().eventId;
  const [playerRoles, setplayerRoles] = useState([]);
  const [showDropDown, setshowDropDown] = useState(false);
  const [playerRole, setplayerRole] = useState("");

  const getPLayerRoles = async () => {
    const res = await axios.get("/playerRole");
    console.log(res.data.playerRole);
    setplayerRoles(res.data.playerRole);
  };
  const showDropDownHandler = () => {
    setshowDropDown(true);
  }
  const userRegisterAsPLayer = async (e) => {
    
    
    // console.log("player role...",playerRole);
    // console.log(e.target.value)
    const user = {
      user: localStorage.getItem("id"),
      playerRole: e.target.value,
    };
    console.log(user);
    const res = await axios.post("/player/add", user);
    console.log(res.data);
    alert("user addded as player...")
    const playerObj = {
      playerId: res.data.player._id,
    }
    const res1 = await axios.put("/team/addplayer/"+teamid, playerObj);
    console.log(res1.data);
    alert("player added to team...")
  };
  useEffect(() => {
    console.log("team id...", teamid);
    console.log("event id...", eventid);
    getPLayerRoles();
  }, []);

  return (
    <>
      <Helmet>
        <link href="../../img/favicon.ico" rel="icon" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Nunito:wght@600;700;800&family=Pacifico&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
          rel="stylesheet"
        />

        <link href="../../lib/animate/animate.min.css" rel="stylesheet" />
        <link
          href="../../lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link
          href="../../../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
          rel="stylesheet"
        />

        <link href="../../../../css/bootstrap.min.css" rel="stylesheet" />

        <link href="../../../../css/style.css" rel="stylesheet"></link>
      </Helmet>
      <div style={{ marginTop: 150 }} className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center wow fadeInUp"
            data-wow-delay="0.1s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">
              Food Menu
            </h5>
            <h1 className="mb-5">Players of </h1>
            <div>
              <button
                onClick={() => {
                  showDropDownHandler();
                }}
                className="btn btn-primary"
              >
                Register As player
              </button>
            </div>
            {showDropDown ? (
              <div>
                
                  <div className="form-group">
                    <label for="exampleFormControlSelect1">
                      Select Player Role
                    </label>
                    <select
                    onChange={(e)=>{userRegisterAsPLayer(e)}}
                      className="form-control"
                      id="exampleFormControlSelect1"
                    >
                      {playerRoles.map((playerRole) => {
                        return (
                          <option value={playerRole._id}>
                            {playerRole.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div
            className="tab-class text-center wow fadeInUp"
            data-wow-delay="0.1s"
            style={{
              visibility: "visible",
              animationDelay: "0.1s",
              animationName: "fadeInUp",
            }}
          >
            {/* <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
            <li className="nav-item">
              <a
                className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active"
                data-bs-toggle="pill"
                href="#tab-1"
              >
                <i className="fa fa-coffee fa-2x text-primary" />
                <div className="ps-3">
                  <small className="text-body">Popular</small>
                  <h6 className="mt-n1 mb-0">Breakfast</h6>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex align-items-center text-start mx-3 pb-3"
                data-bs-toggle="pill"
                href="#tab-2"
              >
                <i className="fa fa-hamburger fa-2x text-primary" />
                <div className="ps-3">
                  <small className="text-body">Special</small>
                  <h6 className="mt-n1 mb-0">Launch</h6>
                </div>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="d-flex align-items-center text-start mx-3 me-0 pb-3"
                data-bs-toggle="pill"
                href="#tab-3"
              >
                <i className="fa fa-utensils fa-2x text-primary" />
                <div className="ps-3">
                  <small className="text-body">Lovely</small>
                  <h6 className="mt-n1 mb-0">Dinner</h6>
                </div>
              </a>
            </li>
          </ul> */}
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-2.jpg"
                        alt=""
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-1.jpg"
                        alt=""
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-2.jpg"
                        alt=""
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-3.jpg"
                        alt=""
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-4.jpg"
                        alt=""
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-5.jpg"
                        alt=""
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-6.jpg"
                        alt=""
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-7.jpg"
                        alt=""
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="d-flex align-items-center">
                      <img
                        className="flex-shrink-0 img-fluid rounded"
                        src="img/menu-8.jpg"
                        alt=""
                        style={{ width: 80 }}
                      />
                      <div className="w-100 d-flex flex-column text-start ps-4">
                        <h5 className="d-flex justify-content-between border-bottom pb-2">
                          <span>Chicken Burger</span>
                          <span className="text-primary">$115</span>
                        </h5>
                        <small className="fst-italic">
                          Ipsum ipsum clita erat amet dolor justo diam
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
