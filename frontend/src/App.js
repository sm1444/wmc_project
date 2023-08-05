import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
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
import { AdminLoginComponent } from "./components/admin/AdminLoginComponent";
import { HallOfFame } from "./components/HallOfFame";
import { CreateEvent } from "./components/admin/CreateEvent";
import { AdminEventDetail } from "./components/admin/AdminEventDetail";
import { CreateTeamAdmin } from "./components/admin/CreateTeamAdmin";
import { AddMetchComomponent } from "./components/admin/AddMetchComomponent";
import { GenerateTicketComponents } from "./components/GenerateTicketComponents";
import { AboutUs } from "./components/AboutUs";
import ProtectedRoutes from "./hooks/ProtectedRoutes";

function App() {
  axios.defaults.baseURL = "http://localhost:5000/";
  const location = useLocation();
  const currentUrl = location.pathname;
  console.log(currentUrl);
  const url = "/admin/";
  console.log(currentUrl.includes(url));
  console.log(currentUrl.includes !== "admin");

  return (
    <>
      <div>
        <Routes>
          <Route path="/admin" element={<AdminDashBoard />}></Route>
          <Route path="/admin/eventcreate" element={<CreateEvent />}></Route>
          <Route
            path="/admin/event/detail/:eventId"
            element={<AdminEventDetail />}
          ></Route>
          <Route
            path="/admin/create/team/:eventId"
            element={<CreateTeamAdmin />}
          ></Route>
          <Route
            path="/admin/create-match"
            element={<AddMetchComomponent />}
          ></Route>
        </Routes>
      </div>
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

          {!currentUrl.includes("/admin/") ? <Navbar /> : <> </>}

          <Routes>
            <Route path="/" element={<WelcomeComponent />}></Route>
            <Route path="/adduser" element={<AddUserComponent />}></Route>
            <Route path="/login" element={<UserLoginComponent />}></Route>
            <Route path="/userlist" element={<UserListComponent />}></Route>

            <Route path="/eventlist" element={<EventList />}></Route>
            <Route path="/event/details/:id" element={<EventDetail />}></Route>
            <Route path="/event/team/:eventId" element={<Teams />}></Route>
            <Route
              path="/admin/login"
              element={<AdminLoginComponent />}
            ></Route>
            <Route path="/halloffame" element={<HallOfFame />}></Route>
            <Route element={<ProtectedRoutes/>}>
            <Route
              path="/event/team/player/:eventId/:teamId"
              element={<TeamPlayers />}
            ></Route>
            </Route>
            <Route path="/user" element={<UserDashBoard />}></Route>
            <Route path="/genrerate-ticket" element={<GenerateTicketComponents />}></Route>
            <Route path="/aboutus" element={<AboutUs />}></Route>
          </Routes>
        </div>

        {!currentUrl.includes("/admin/") ? <Footer /> : <> </>}
      </body>
    </>
  );
}

export default App;
