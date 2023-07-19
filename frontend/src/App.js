import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AddUserComponent } from "./components/AddUserComponent";
import { UserListComponent } from "./components/UserListComponent";
import { UserLoginComponent } from "./components/UserLoginComponent";
import { AdminDashBoard } from "./components/AdminDashBoard";
import { UserDashBoard } from "./components/UserDashBoard";
import { Helmet } from "react-helmet";
import { Navbar } from "./components/Navbar";
import { Corosol } from "./components/Corosol";
import { Footer } from "./components/Footer";
import { WelcomeComponent } from "./components/WelcomeComponent";
import { EventList } from "./components/EventList";
import axios from "axios";
import { EventDetail } from "./components/EventDetail";
import { Teams } from "./components/Teams";
import { TeamPlayers } from "./components/TeamPlayers";

function App() {
  axios.defaults.baseURL = "http://localhost:5000/";
  return (
    <>
      <Helmet>
        <link href="img/favicon.ico" rel="icon" />

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

        <link href="../lib/animate/animate.min.css" rel="stylesheet" />
        <link
          href="../lib/owlcarousel/assets/owl.carousel.min.css"
          rel="stylesheet"
        />
        <link
          href="../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css"
          rel="stylesheet"
        />

        <link href="../css/bootstrap.min.css" rel="stylesheet" />

        <link href="../css/style.css" rel="stylesheet"></link>
      </Helmet>
      <body>
        <div className="container-xxl bg-white p-0">
          <div
            id="spinner"
            className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
          >
            <div
              className="spinner-border text-primary"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
            <div className="container-xxl position-relative p-0"></div>
          </div>

          <Navbar />

          <Routes>
            <Route path="/" element={<WelcomeComponent />}></Route>
            <Route path="/adduser" element={<AddUserComponent />}></Route>
            <Route path="/login" element={<UserLoginComponent />}></Route>
            <Route path="/userlist" element={<UserListComponent />}></Route>
            <Route path="/admin" element={<AdminDashBoard />}></Route>
            <Route path="/eventlist" element={<EventList />}></Route>
            <Route path="/event/details/:id" element={<EventDetail />}></Route>
            <Route path ="/event/team/:eventId" element = {<Teams/>}></Route>
            <Route path ="/event/team/player/:eventId/:teamId" element = {<TeamPlayers/>}></Route>
            <Route path="/user" element={<UserDashBoard />}></Route>
          </Routes>
        </div>
        <Footer />
      </body>
    </>
  );
}

export default App;
