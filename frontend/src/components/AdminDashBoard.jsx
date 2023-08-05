import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { get } from "react-hook-form";
import { Link } from "react-router-dom";
import { AdminSidebar } from "./admin/AdminSidebar";

export const AdminDashBoard = () => {
  const [events, setevents] = useState([]);
  const [users, setusers] = useState([]);
  const getEventData = async () => {
    const res = await axios.get("/event/get");
    console.log(res.data.event);
    setevents(res.data.event);
  };
  const getUserData = async () => {
    const res = await axios.get("/user/user");
    setusers(res.data.data);
  };
  useEffect(() => {
    getEventData();
    getUserData();
  }, []);

  return (
    <>
      {/* <Helmet>
        <link
          rel="icon"
          type="image/x-icon"
          href="assets/img/favicon/favicon.ico"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="../admin/assets/vendor/css/core.css" />
        <link
          rel="stylesheet"
          href="../admin/assets/vendor/css/theme-default.css"
        />
        <link rel="stylesheet" href="../admin/assets/css/demo.css" />
      </Helmet> */}
      <div style={{ marginTop: 10 }}>
        <>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta httpEquiv="Content-Language" content="en" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <title>
            ADMIN DASHBOARD - This is an example dashboard created using
            build-in elements and components.
          </title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no"
          />
          <meta
            name="description"
            content="This is an example dashboard created using build-in elements and components."
          />
          <meta name="msapplication-tap-highlight" content="no" />
          <link
            href="https://demo.dashboardpack.com/architectui-html-free/main.css"
            rel="stylesheet"
          />
          <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
            <div className="app-header header-shadow">
              {/* <div className="app-header__logo">
                <div className="logo-src" />
                <div className="header__pane ml-auto">
                  <div>
                    <button
                      type="button"
                      className="hamburger close-sidebar-btn hamburger--elastic"
                      data-class="closed-sidebar"
                    >
                      <span className="hamburger-box">
                        <span className="hamburger-inner" />
                      </span>
                    </button>
                  </div>
                </div>
              </div> */}
              <div className="app-header__mobile-menu">
                <div>
                  <button
                    type="button"
                    className="hamburger hamburger--elastic mobile-toggle-nav"
                  >
                    <span className="hamburger-box">
                      <span className="hamburger-inner" />
                    </span>
                  </button>
                </div>
              </div>
              <div className="app-header__menu">
                <span>
                  <button
                    type="button"
                    className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                  >
                    <span className="btn-icon-wrapper">
                      <i className="fa fa-ellipsis-v fa-w-6" />
                    </span>
                  </button>
                </span>
              </div>{" "}
              <div className="app-header__content">
                <div className="app-header-left">
                  <div className="search-wrapper">
                    <div className="input-holder">
                      <input
                        type="text"
                        className="search-input"
                        placeholder="Type to search"
                      />
                      <button className="search-icon">
                        <span />
                      </button>
                    </div>
                    <button className="close" />
                  </div>
                  <ul className="header-menu nav">
                    <li className="nav-item">
                      <a href="javascript:void(0);" className="nav-link">
                        <i className="nav-link-icon fa fa-database"> </i>
                        Statistics
                      </a>
                    </li>
                    <li className="btn-group nav-item">
                      <a href="javascript:void(0);" className="nav-link">
                        <i className="nav-link-icon fa fa-edit" />
                        Projects
                      </a>
                    </li>
                    <li className="dropdown nav-item">
                      <a href="javascript:void(0);" className="nav-link">
                        <i className="nav-link-icon fa fa-cog" />
                        Settings
                      </a>
                    </li>
                  </ul>{" "}
                </div>
                <div className="app-header-right">
                  <div className="header-btn-lg pr-0">
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left">
                          <div className="btn-group">
                            <a
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              className="p-0 btn"
                            >
                              <img
                                width={42}
                                className="rounded-circle"
                                src="assets/images/avatars/1.jpg"
                                alt=""
                              />
                              <i className="fa fa-angle-down ml-2 opacity-8" />
                            </a>
                            <div
                              tabIndex={-1}
                              role="menu"
                              aria-hidden="true"
                              className="dropdown-menu dropdown-menu-right"
                            >
                              <button
                                type="button"
                                tabIndex={0}
                                className="dropdown-item"
                              >
                                User Account
                              </button>
                              <button
                                type="button"
                                tabIndex={0}
                                className="dropdown-item"
                              >
                                Settings
                              </button>
                              <h6 tabIndex={-1} className="dropdown-header">
                                Header
                              </h6>
                              <button
                                type="button"
                                tabIndex={0}
                                className="dropdown-item"
                              >
                                Actions
                              </button>
                              <div tabIndex={-1} className="dropdown-divider" />
                              <button
                                type="button"
                                tabIndex={0}
                                className="dropdown-item"
                              >
                                Dividers
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="widget-content-left  ml-3 header-user-info">
                          <div className="widget-heading">Alina Mclourd</div>
                          <div className="widget-subheading">
                            VP People Manager
                          </div>
                        </div>
                        <div className="widget-content-right header-user-info ml-3">
                          <button
                            type="button"
                            className="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example"
                          >
                            <i className="fa text-white fa-calendar pr-1 pl-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>
              </div>
            </div>{" "}
            <div className="ui-theme-settings">
              <button
                type="button"
                id="TooltipDemo"
                className="btn-open-options btn btn-warning"
              >
                <i className="fa fa-cog fa-w-16 fa-spin fa-2x" />
              </button>
              <div className="theme-settings__inner">
                <div className="scrollbar-container">
                  <div className="theme-settings__options-wrapper">
                    <h3 className="themeoptions-heading">Layout Options</h3>
                    <div className="p-3">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left mr-3">
                                <div
                                  className="switch has-switch switch-container-class"
                                  data-class="fixed-header"
                                >
                                  <div className="switch-animate switch-on">
                                    <input
                                      type="checkbox"
                                      defaultChecked=""
                                      data-toggle="toggle"
                                      data-onstyle="success"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Fixed Header
                                </div>
                                <div className="widget-subheading">
                                  Makes the header top fixed, always visible!
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left mr-3">
                                <div
                                  className="switch has-switch switch-container-class"
                                  data-class="fixed-sidebar"
                                >
                                  <div className="switch-animate switch-on">
                                    <input
                                      type="checkbox"
                                      defaultChecked=""
                                      data-toggle="toggle"
                                      data-onstyle="success"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Fixed Sidebar
                                </div>
                                <div className="widget-subheading">
                                  Makes the sidebar left fixed, always visible!
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="list-group-item">
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left mr-3">
                                <div
                                  className="switch has-switch switch-container-class"
                                  data-class="fixed-footer"
                                >
                                  <div className="switch-animate switch-off">
                                    <input
                                      type="checkbox"
                                      data-toggle="toggle"
                                      data-onstyle="success"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Fixed Footer
                                </div>
                                <div className="widget-subheading">
                                  Makes the app footer bottom fixed, always
                                  visible!
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <h3 className="themeoptions-heading">
                      <div>Header Options</div>
                      <button
                        type="button"
                        className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-header-cs-class"
                        data-class=""
                      >
                        Restore Default
                      </button>
                    </h3>
                    <div className="p-3">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <h5 className="pb-2">Choose Color Scheme</h5>
                          <div className="theme-settings-swatches">
                            <div
                              className="swatch-holder bg-primary switch-header-cs-class"
                              data-class="bg-primary header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-secondary switch-header-cs-class"
                              data-class="bg-secondary header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-success switch-header-cs-class"
                              data-class="bg-success header-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-info switch-header-cs-class"
                              data-class="bg-info header-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-warning switch-header-cs-class"
                              data-class="bg-warning header-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-danger switch-header-cs-class"
                              data-class="bg-danger header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-light switch-header-cs-class"
                              data-class="bg-light header-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-dark switch-header-cs-class"
                              data-class="bg-dark header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-focus switch-header-cs-class"
                              data-class="bg-focus header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-alternate switch-header-cs-class"
                              data-class="bg-alternate header-text-light"
                            ></div>
                            <div className="divider"></div>
                            <div
                              className="swatch-holder bg-vicious-stance switch-header-cs-class"
                              data-class="bg-vicious-stance header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-midnight-bloom switch-header-cs-class"
                              data-class="bg-midnight-bloom header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-night-sky switch-header-cs-class"
                              data-class="bg-night-sky header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-slick-carbon switch-header-cs-class"
                              data-class="bg-slick-carbon header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-asteroid switch-header-cs-class"
                              data-class="bg-asteroid header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-royal switch-header-cs-class"
                              data-class="bg-royal header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-warm-flame switch-header-cs-class"
                              data-class="bg-warm-flame header-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-night-fade switch-header-cs-class"
                              data-class="bg-night-fade header-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-sunny-morning switch-header-cs-class"
                              data-class="bg-sunny-morning header-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-tempting-azure switch-header-cs-class"
                              data-class="bg-tempting-azure header-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-amy-crisp switch-header-cs-class"
                              data-class="bg-amy-crisp header-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-heavy-rain switch-header-cs-class"
                              data-class="bg-heavy-rain header-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-mean-fruit switch-header-cs-class"
                              data-class="bg-mean-fruit header-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-malibu-beach switch-header-cs-class"
                              data-class="bg-malibu-beach header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-deep-blue switch-header-cs-class"
                              data-class="bg-deep-blue header-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-ripe-malin switch-header-cs-class"
                              data-class="bg-ripe-malin header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-arielle-smile switch-header-cs-class"
                              data-class="bg-arielle-smile header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-plum-plate switch-header-cs-class"
                              data-class="bg-plum-plate header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-happy-fisher switch-header-cs-class"
                              data-class="bg-happy-fisher header-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-happy-itmeo switch-header-cs-class"
                              data-class="bg-happy-itmeo header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-mixed-hopes switch-header-cs-class"
                              data-class="bg-mixed-hopes header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-strong-bliss switch-header-cs-class"
                              data-class="bg-strong-bliss header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-grow-early switch-header-cs-class"
                              data-class="bg-grow-early header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-love-kiss switch-header-cs-class"
                              data-class="bg-love-kiss header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-premium-dark switch-header-cs-class"
                              data-class="bg-premium-dark header-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-happy-green switch-header-cs-class"
                              data-class="bg-happy-green header-text-light"
                            ></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <h3 className="themeoptions-heading">
                      <div>Sidebar Options</div>
                      <button
                        type="button"
                        className="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm switch-sidebar-cs-class"
                        data-class=""
                      >
                        Restore Default
                      </button>
                    </h3>
                    <div className="p-3">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <h5 className="pb-2">Choose Color Scheme</h5>
                          <div className="theme-settings-swatches">
                            <div
                              className="swatch-holder bg-primary switch-sidebar-cs-class"
                              data-class="bg-primary sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-secondary switch-sidebar-cs-class"
                              data-class="bg-secondary sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-success switch-sidebar-cs-class"
                              data-class="bg-success sidebar-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-info switch-sidebar-cs-class"
                              data-class="bg-info sidebar-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-warning switch-sidebar-cs-class"
                              data-class="bg-warning sidebar-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-danger switch-sidebar-cs-class"
                              data-class="bg-danger sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-light switch-sidebar-cs-class"
                              data-class="bg-light sidebar-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-dark switch-sidebar-cs-class"
                              data-class="bg-dark sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-focus switch-sidebar-cs-class"
                              data-class="bg-focus sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-alternate switch-sidebar-cs-class"
                              data-class="bg-alternate sidebar-text-light"
                            ></div>
                            <div className="divider"></div>
                            <div
                              className="swatch-holder bg-vicious-stance switch-sidebar-cs-class"
                              data-class="bg-vicious-stance sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-midnight-bloom switch-sidebar-cs-class"
                              data-class="bg-midnight-bloom sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-night-sky switch-sidebar-cs-class"
                              data-class="bg-night-sky sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-slick-carbon switch-sidebar-cs-class"
                              data-class="bg-slick-carbon sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-asteroid switch-sidebar-cs-class"
                              data-class="bg-asteroid sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-royal switch-sidebar-cs-class"
                              data-class="bg-royal sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-warm-flame switch-sidebar-cs-class"
                              data-class="bg-warm-flame sidebar-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-night-fade switch-sidebar-cs-class"
                              data-class="bg-night-fade sidebar-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-sunny-morning switch-sidebar-cs-class"
                              data-class="bg-sunny-morning sidebar-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-tempting-azure switch-sidebar-cs-class"
                              data-class="bg-tempting-azure sidebar-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-amy-crisp switch-sidebar-cs-class"
                              data-class="bg-amy-crisp sidebar-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-heavy-rain switch-sidebar-cs-class"
                              data-class="bg-heavy-rain sidebar-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-mean-fruit switch-sidebar-cs-class"
                              data-class="bg-mean-fruit sidebar-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-malibu-beach switch-sidebar-cs-class"
                              data-class="bg-malibu-beach sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-deep-blue switch-sidebar-cs-class"
                              data-class="bg-deep-blue sidebar-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-ripe-malin switch-sidebar-cs-class"
                              data-class="bg-ripe-malin sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-arielle-smile switch-sidebar-cs-class"
                              data-class="bg-arielle-smile sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-plum-plate switch-sidebar-cs-class"
                              data-class="bg-plum-plate sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-happy-fisher switch-sidebar-cs-class"
                              data-class="bg-happy-fisher sidebar-text-dark"
                            ></div>
                            <div
                              className="swatch-holder bg-happy-itmeo switch-sidebar-cs-class"
                              data-class="bg-happy-itmeo sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-mixed-hopes switch-sidebar-cs-class"
                              data-class="bg-mixed-hopes sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-strong-bliss switch-sidebar-cs-class"
                              data-class="bg-strong-bliss sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-grow-early switch-sidebar-cs-class"
                              data-class="bg-grow-early sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-love-kiss switch-sidebar-cs-class"
                              data-class="bg-love-kiss sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-premium-dark switch-sidebar-cs-class"
                              data-class="bg-premium-dark sidebar-text-light"
                            ></div>
                            <div
                              className="swatch-holder bg-happy-green switch-sidebar-cs-class"
                              data-class="bg-happy-green sidebar-text-light"
                            ></div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <h3 className="themeoptions-heading">
                      <div>Main Content Options</div>
                      <button
                        type="button"
                        className="btn-pill btn-shadow btn-wide ml-auto active btn btn-focus btn-sm"
                      >
                        Restore Default
                      </button>
                    </h3>
                    <div className="p-3">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <h5 className="pb-2">Page Section Tabs</h5>
                          <div className="theme-settings-swatches">
                            <div role="group" className="mt-2 btn-group">
                              <button
                                type="button"
                                className="btn-wide btn-shadow btn-primary btn btn-secondary switch-theme-class"
                                data-class="body-tabs-line"
                              >
                                Line
                              </button>
                              <button
                                type="button"
                                className="btn-wide btn-shadow btn-primary active btn btn-secondary switch-theme-class"
                                data-class="body-tabs-shadow"
                              >
                                Shadow
                              </button>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="app-main">
              <div className="app-sidebar sidebar-shadow">
                <div className="app-header__logo">
                  <div className="logo-src" />
                  <div className="header__pane ml-auto">
                    <div>
                      <button
                        type="button"
                        className="hamburger close-sidebar-btn hamburger--elastic"
                        data-class="closed-sidebar"
                      >
                        <span className="hamburger-box">
                          <span className="hamburger-inner" />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="app-header__mobile-menu">
                  <div>
                    <button
                      type="button"
                      className="hamburger hamburger--elastic mobile-toggle-nav"
                    >
                      <span className="hamburger-box">
                        <span className="hamburger-inner" />
                      </span>
                    </button>
                  </div>
                </div>
                <div className="app-header__menu">
                  <span>
                    <button
                      type="button"
                      className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                    >
                      <span className="btn-icon-wrapper">
                        <i className="fa fa-ellipsis-v fa-w-6" />
                      </span>
                    </button>
                  </span>
                </div>{" "}
                <div className="scrollbar-sidebar">
                  <div className="app-sidebar__inner">
                    <ul className="vertical-nav-menu">
                      <li className="app-sidebar__heading">Dashboards</li>
                      <li>
                        <a href="index.html" className="mm-active">
                          <i className="metismenu-icon pe-7s-rocket" />
                          Dashboard Example 1
                        </a>
                      </li>
                      <li className="app-sidebar__heading">UI Components</li>
                      <li>
                        <a href="#">
                          <i className="metismenu-icon pe-7s-diamond" />
                          Elements
                          <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                        </a>
                        <ul>
                          <li>
                            <a href="elements-buttons-standard.html">
                              <i className="metismenu-icon" />
                              Buttons
                            </a>
                          </li>
                          <li>
                            <a href="elements-dropdowns.html">
                              <i className="metismenu-icon"></i>Dropdowns
                            </a>
                          </li>
                          <li>
                            <a href="elements-icons.html">
                              <i className="metismenu-icon"></i>Icons
                            </a>
                          </li>
                          <li>
                            <a href="elements-badges-labels.html">
                              <i className="metismenu-icon"></i>Badges
                            </a>
                          </li>
                          <li>
                            <a href="elements-cards.html">
                              <i className="metismenu-icon"></i>Cards
                            </a>
                          </li>
                          <li>
                            <a href="elements-list-group.html">
                              <i className="metismenu-icon"></i>List Groups
                            </a>
                          </li>
                          <li>
                            <a href="elements-navigation.html">
                              <i className="metismenu-icon"></i>Navigation Menus
                            </a>
                          </li>
                          <li>
                            <a href="elements-utilities.html">
                              <i className="metismenu-icon"></i>Utilities
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">
                          <i className="metismenu-icon pe-7s-car" />
                          Components
                          <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                        </a>
                        <ul>
                          <li>
                            <a href="components-tabs.html">
                              <i className="metismenu-icon"></i>Tabs
                            </a>
                          </li>
                          <li>
                            <a href="components-accordions.html">
                              <i className="metismenu-icon"></i>Accordions
                            </a>
                          </li>
                          <li>
                            <a href="components-notifications.html">
                              <i className="metismenu-icon"></i>Notifications
                            </a>
                          </li>
                          <li>
                            <a href="components-modals.html">
                              <i className="metismenu-icon"></i>Modals
                            </a>
                          </li>
                          <li>
                            <a href="components-progress-bar.html">
                              <i className="metismenu-icon"></i>Progress Bar
                            </a>
                          </li>
                          <li>
                            <a href="components-tooltips-popovers.html">
                              <i className="metismenu-icon"></i>Tooltips &amp;
                              Popovers
                            </a>
                          </li>
                          <li>
                            <a href="components-carousel.html">
                              <i className="metismenu-icon"></i>Carousel
                            </a>
                          </li>
                          <li>
                            <a href="components-calendar.html">
                              <i className="metismenu-icon"></i>Calendar
                            </a>
                          </li>
                          <li>
                            <a href="components-pagination.html">
                              <i className="metismenu-icon"></i>Pagination
                            </a>
                          </li>
                          <li>
                            <a href="components-scrollable-elements.html">
                              <i className="metismenu-icon"></i>Scrollable
                            </a>
                          </li>
                          <li>
                            <a href="components-maps.html">
                              <i className="metismenu-icon"></i>Maps
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="tables-regular.html">
                          <i className="metismenu-icon pe-7s-display2" />
                          Tables
                        </a>
                      </li>
                      <li className="app-sidebar__heading">Widgets</li>
                      <li>
                        <a href="dashboard-boxes.html">
                          <i className="metismenu-icon pe-7s-display2" />
                          Dashboard Boxes
                        </a>
                      </li>
                      <li className="app-sidebar__heading">Forms</li>
                      <li>
                        <a href="forms-controls.html">
                          <i className="metismenu-icon pe-7s-mouse"></i>Forms
                          Controls
                        </a>
                      </li>
                      <li>
                        <a href="forms-layouts.html">
                          <i className="metismenu-icon pe-7s-eyedropper"></i>
                          Forms Layouts
                        </a>
                      </li>
                      <li>
                        <a href="forms-validation.html">
                          <i className="metismenu-icon pe-7s-pendrive"></i>Forms
                          Validation
                        </a>
                      </li>
                      <li className="app-sidebar__heading">Charts</li>
                      <li>
                        <a href="charts-chartjs.html">
                          <i className="metismenu-icon pe-7s-graph2"></i>ChartJS
                        </a>
                      </li>
                      <li className="app-sidebar__heading">PRO Version</li>
                      <li>
                        <a
                          href="https://dashboardpack.com/theme-details/architectui-dashboard-html-pro/"
                          target="_blank"
                        >
                          <i className="metismenu-icon pe-7s-graph2"></i>
                          Upgrade to PRO
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>{" "}
              <div className="app-main__outer">
                <div className="app-main__inner">
                  <div className="app-page-title">
                    <div className="page-title-wrapper">
                      <div className="page-title-heading">
                        <div className="page-title-icon">
                          <i className="pe-7s-car icon-gradient bg-mean-fruit"></i>
                        </div>
                        <div>
                          ADMIN DASHBOARD
                          <div className="page-title-subheading">
                            ADMIN CAN MANAGE ALL EVENT AND USER FROM HERE
                          </div>
                        </div>
                      </div>
                      <div className="page-title-actions">
                        <button
                          type="button"
                          data-toggle="tooltip"
                          title="Example Tooltip"
                          data-placement="bottom"
                          className="btn-shadow mr-3 btn btn-dark"
                        >
                          <i className="fa fa-star" />
                        </button>
                      </div>{" "}
                    </div>
                  </div>{" "}
                  <div className="row">
                    <div className="col-md-6 col-xl-4">
                      <div className="card mb-3 widget-content bg-midnight-bloom">
                        <div className="widget-content-wrapper text-white">
                          <div className="widget-content-left">
                            <div className="widget-heading">Total EVENTS</div>
                            <div className="widget-subheading">ALL EVENTS</div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-white">
                              <span>{events?.length}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                      <div className="card mb-3 widget-content bg-arielle-smile">
                        <div className="widget-content-wrapper text-white">
                          <div className="widget-content-left">
                            <div className="widget-heading">Users</div>
                            <div className="widget-subheading">Total Users</div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-white">
                              <span>{users?.length}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                      <div className="card mb-3 widget-content bg-grow-early">
                        <div className="widget-content-wrapper text-white">
                          <div className="widget-content-left">
                            <div className="widget-heading">Teams</div>
                            <div className="widget-subheading">
                              Total registred Teams
                            </div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-white">
                              <span>{}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
                      <div className="card mb-3 widget-content bg-premium-dark">
                        <div className="widget-content-wrapper text-white">
                          <div className="widget-content-left">
                            <div className="widget-heading">Products Sold</div>
                            <div className="widget-subheading">
                              Revenue streams
                            </div>
                          </div>
                          <div className="widget-content-right">
                            <div className="widget-numbers text-warning">
                              <span>$14M</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="row">
                    <div className="col-md-12 col-lg-6">
                     <div className="mb-3 card">
                        <div className="card-header-tab card-header-tab-animation card-header">
                          <div className="card-header-title">
                            <i className="header-icon lnr-apartment icon-gradient bg-love-kiss">
                              {" "}
                            </i>
                            Sales Report
                          </div>
                          <ul className="nav">
                            <li className="nav-item">
                              <a
                                href="javascript:void(0);"
                                className="active nav-link"
                              >
                                Last
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                href="javascript:void(0);"
                                className="nav-link second-tab-toggle"
                              >
                                Current
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="card-body">
                          <div className="tab-content">
                            <div
                              className="tab-pane fade show active"
                              id="tabs-eg-77"
                            >
                              <div className="card mb-3 widget-chart widget-chart2 text-left w-100">
                                <div className="widget-chat-wrapper-outer">
                                  <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                    <canvas id="canvas" />
                                  </div>
                                </div>
                              </div>
                              <h6 className="text-muted text-uppercase font-size-md opacity-5 font-weight-normal">
                                Top Authors
                              </h6>
                              <div className="scroll-area-sm">
                                <div className="scrollbar-container">
                                  <ul className="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                    <li className="list-group-item">
                                      <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                          <div className="widget-content-left mr-3">
                                            <img
                                              width={42}
                                              className="rounded-circle"
                                              src="assets/images/avatars/9.jpg"
                                              alt=""
                                            />
                                          </div>
                                          <div className="widget-content-left">
                                            <div className="widget-heading">
                                              Ella-Rose Henry
                                            </div>
                                            <div className="widget-subheading">
                                              Web Developer
                                            </div>
                                          </div>
                                          <div className="widget-content-right">
                                            <div className="font-size-xlg text-muted">
                                              <small className="opacity-5 pr-1">
                                                $
                                              </small>
                                              <span>129</span>
                                              <small className="text-danger pl-2">
                                                <i className="fa fa-angle-down" />
                                              </small>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-group-item">
                                      <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                          <div className="widget-content-left mr-3">
                                            <img
                                              width={42}
                                              className="rounded-circle"
                                              src="assets/images/avatars/5.jpg"
                                              alt=""
                                            />
                                          </div>
                                          <div className="widget-content-left">
                                            <div className="widget-heading">
                                              Ruben Tillman
                                            </div>
                                            <div className="widget-subheading">
                                              UI Designer
                                            </div>
                                          </div>
                                          <div className="widget-content-right">
                                            <div className="font-size-xlg text-muted">
                                              <small className="opacity-5 pr-1">
                                                $
                                              </small>
                                              <span>54</span>
                                              <small className="text-success pl-2">
                                                <i className="fa fa-angle-up" />
                                              </small>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-group-item">
                                      <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                          <div className="widget-content-left mr-3">
                                            <img
                                              width={42}
                                              className="rounded-circle"
                                              src="assets/images/avatars/4.jpg"
                                              alt=""
                                            />
                                          </div>
                                          <div className="widget-content-left">
                                            <div className="widget-heading">
                                              Vinnie Wagstaff
                                            </div>
                                            <div className="widget-subheading">
                                              Java Programmer
                                            </div>
                                          </div>
                                          <div className="widget-content-right">
                                            <div className="font-size-xlg text-muted">
                                              <small className="opacity-5 pr-1">
                                                $
                                              </small>
                                              <span>429</span>
                                              <small className="text-warning pl-2">
                                                <i className="fa fa-dot-circle" />
                                              </small>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-group-item">
                                      <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                          <div className="widget-content-left mr-3">
                                            <img
                                              width={42}
                                              className="rounded-circle"
                                              src="assets/images/avatars/3.jpg"
                                              alt=""
                                            />
                                          </div>
                                          <div className="widget-content-left">
                                            <div className="widget-heading">
                                              Ella-Rose Henry
                                            </div>
                                            <div className="widget-subheading">
                                              Web Developer
                                            </div>
                                          </div>
                                          <div className="widget-content-right">
                                            <div className="font-size-xlg text-muted">
                                              <small className="opacity-5 pr-1">
                                                $
                                              </small>
                                              <span>129</span>
                                              <small className="text-danger pl-2">
                                                <i className="fa fa-angle-down" />
                                              </small>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                    <li className="list-group-item">
                                      <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                          <div className="widget-content-left mr-3">
                                            <img
                                              width={42}
                                              className="rounded-circle"
                                              src="assets/images/avatars/2.jpg"
                                              alt=""
                                            />
                                          </div>
                                          <div className="widget-content-left">
                                            <div className="widget-heading">
                                              Ruben Tillman
                                            </div>
                                            <div className="widget-subheading">
                                              UI Designer
                                            </div>
                                          </div>
                                          <div className="widget-content-right">
                                            <div className="font-size-xlg text-muted">
                                              <small className="opacity-5 pr-1">
                                                $
                                              </small>
                                              <span>54</span>
                                              <small className="text-success pl-2">
                                                <i className="fa fa-angle-up" />
                                              </small>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> 
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <div className="mb-3 card">
                        <div className="card-header-tab card-header">
                          <div className="card-header-title">
                            <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure">
                              {" "}
                            </i>
                            Bandwidth Reports
                          </div>
                          <div className="btn-actions-pane-right">
                            <div className="nav">
                              <a
                                href="javascript:void(0);"
                                className="border-0 btn-pill btn-wide btn-transition active btn btn-outline-alternate"
                              >
                                Tab 1
                              </a>
                              <a
                                href="javascript:void(0);"
                                className="ml-1 btn-pill btn-wide border-0 btn-transition  btn btn-outline-alternate second-tab-toggle-alt"
                              >
                                Tab 2
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="tab-content">
                          <div
                            className="tab-pane fade active show"
                            id="tab-eg-55"
                          >
                            <div className="widget-chart p-3">
                              <div style={{ height: 350 }}>
                                <canvas id="line-chart" />
                              </div>
                              <div className="widget-chart-content text-center mt-5">
                                <div className="widget-description mt-0 text-warning">
                                  <i className="fa fa-arrow-left" />
                                  <span className="pl-1">175.5%</span>
                                  <span className="text-muted opacity-8 pl-1">
                                    increased server resources
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="pt-2 card-body">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="widget-content">
                                    <div className="widget-content-outer">
                                      <div className="widget-content-wrapper">
                                        <div className="widget-content-left">
                                          <div className="widget-numbers fsize-3 text-muted">
                                            63%
                                          </div>
                                        </div>
                                        <div className="widget-content-right">
                                          <div className="text-muted opacity-6">
                                            Generated Leads
                                          </div>
                                        </div>
                                      </div>
                                      <div className="widget-progress-wrapper mt-1">
                                        <div className="progress-bar-sm progress-bar-animated-alt progress">
                                          <div
                                            className="progress-bar bg-danger"
                                            role="progressbar"
                                            aria-valuenow={63}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{ width: "63%" }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="widget-content">
                                    <div className="widget-content-outer">
                                      <div className="widget-content-wrapper">
                                        <div className="widget-content-left">
                                          <div className="widget-numbers fsize-3 text-muted">
                                            32%
                                          </div>
                                        </div>
                                        <div className="widget-content-right">
                                          <div className="text-muted opacity-6">
                                            Submitted Tickers
                                          </div>
                                        </div>
                                      </div>
                                      <div className="widget-progress-wrapper mt-1">
                                        <div className="progress-bar-sm progress-bar-animated-alt progress">
                                          <div
                                            className="progress-bar bg-success"
                                            role="progressbar"
                                            aria-valuenow={32}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{ width: "32%" }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="widget-content">
                                    <div className="widget-content-outer">
                                      <div className="widget-content-wrapper">
                                        <div className="widget-content-left">
                                          <div className="widget-numbers fsize-3 text-muted">
                                            71%
                                          </div>
                                        </div>
                                        <div className="widget-content-right">
                                          <div className="text-muted opacity-6">
                                            Server Allocation
                                          </div>
                                        </div>
                                      </div>
                                      <div className="widget-progress-wrapper mt-1">
                                        <div className="progress-bar-sm progress-bar-animated-alt progress">
                                          <div
                                            className="progress-bar bg-primary"
                                            role="progressbar"
                                            aria-valuenow={71}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{ width: "71%" }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="widget-content">
                                    <div className="widget-content-outer">
                                      <div className="widget-content-wrapper">
                                        <div className="widget-content-left">
                                          <div className="widget-numbers fsize-3 text-muted">
                                            41%
                                          </div>
                                        </div>
                                        <div className="widget-content-right">
                                          <div className="text-muted opacity-6">
                                            Generated Leads
                                          </div>
                                        </div>
                                      </div>
                                      <div className="widget-progress-wrapper mt-1">
                                        <div className="progress-bar-sm progress-bar-animated-alt progress">
                                          <div
                                            className="progress-bar bg-warning"
                                            role="progressbar"
                                            aria-valuenow={41}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                            style={{ width: "41%" }}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="row">
                    <div className="col-md-6 col-xl-4">
                      <div className="card mb-3 widget-content">
                        <div className="widget-content-outer">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                              <div className="widget-heading">Total Orders</div>
                              <div className="widget-subheading">
                                Last year expenses
                              </div>
                            </div>
                            <div className="widget-content-right">
                              <div className="widget-numbers text-success">
                                1896
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                      <div className="card mb-3 widget-content">
                        <div className="widget-content-outer">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                              <div className="widget-heading">
                                Products Sold
                              </div>
                              <div className="widget-subheading">
                                Revenue streams
                              </div>
                            </div>
                            <div className="widget-content-right">
                              <div className="widget-numbers text-warning">
                                $3M
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                      <div className="card mb-3 widget-content">
                        <div className="widget-content-outer">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                              <div className="widget-heading">Followers</div>
                              <div className="widget-subheading">
                                People Interested
                              </div>
                            </div>
                            <div className="widget-content-right">
                              <div className="widget-numbers text-danger">
                                45,9%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
                      <div className="card mb-3 widget-content">
                        <div className="widget-content-outer">
                          <div className="widget-content-wrapper">
                            <div className="widget-content-left">
                              <div className="widget-heading">Income</div>
                              <div className="widget-subheading">
                                Expected totals
                              </div>
                            </div>
                            <div className="widget-content-right">
                              <div className="widget-numbers text-focus">
                                $147
                              </div>
                            </div>
                          </div>
                          <div className="widget-progress-wrapper">
                            <div className="progress-bar-sm progress-bar-animated-alt progress">
                              <div
                                className="progress-bar bg-info"
                                role="progressbar"
                                aria-valuenow={54}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: "54%" }}
                              />
                            </div>
                            <div className="progress-sub-label">
                              <div className="sub-label-left">Expenses</div>
                              <div className="sub-label-right">100%</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="main-card mb-3 card">
                        <div className="card-header">
                          Active Events
                          <div className="btn-actions-pane-right">
                            <div
                              role="group"
                              className="btn-group-sm btn-group"
                            >
                              <Link
                                className="active btn btn-focus mx-2"
                                to="/admin/create-match"
                              >
                                Create new Match
                              </Link>
                              <button className="active btn btn-focus">
                                Create New Event
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="table-responsive">
                          <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                            <thead>
                              <tr>
                                <th className="text-center">#</th>
                                <th>Name</th>
                                <th className="text-center">Venue</th>
                                <th className="text-center">Status</th>
                                <th className="text-center">EVENT DATE</th>
                                <th className="text-center">EVENT TIME</th>
                                <th className="text-center">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {events?.map((event) => {
                                return (
                                  <tr>
                                    <td className="text-center text-muted">
                                      #
                                    </td>
                                    <td>
                                      <div className="widget-content p-0">
                                        <div className="widget-content-wrapper">
                                          <div className="widget-content-left mr-3">
                                            <div className="widget-content-left">
                                              <img
                                                width={40}
                                                className="rounded-circle"
                                                src="assets/images/avatars/4.jpg"
                                                alt=""
                                              />
                                            </div>
                                          </div>
                                          <div className="widget-content-left flex2">
                                            <div className="widget-heading">
                                              {event.name}
                                            </div>
                                            <div className="widget-subheading opacity-7">
                                              {event.eventType}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-center">
                                      {event.venue}
                                    </td>
                                    <td className="text-center">
                                      <div className="badge badge-warning">
                                        {event.status == true
                                          ? "Active"
                                          : "InActive"}
                                      </div>
                                    </td>
                                    <td class="text-center">
                                      {event.eventDate}
                                    </td>
                                    <td class="text-center">
                                      {event.eventTime}
                                    </td>
                                    <td className="text-center">
                                      <Link
                                        to={`/admin/event/detail/${event._id}`}
                                        className="btn btn-primary btn-sm"
                                      >
                                        Create Team
                                      </Link>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                        <div className="d-block text-center card-footer">
                          <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger">
                            <i className="pe-7s-trash btn-icon-wrapper"> </i>
                          </button>
                          {/* <button className="btn-wide btn btn-success">
                            Save
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-lg-3">
                      <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                        <div className="widget-content">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left pr-2 fsize-1">
                                <div className="widget-numbers mt-0 fsize-3 text-danger">
                                  71%
                                </div>
                              </div>
                              <div className="widget-content-right w-100">
                                <div className="progress-bar-xs progress">
                                  <div
                                    className="progress-bar bg-danger"
                                    role="progressbar"
                                    aria-valuenow={71}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "71%" }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="widget-content-left fsize-1">
                              <div className="text-muted opacity-6">
                                Income Target
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="card-shadow-success mb-3 widget-chart widget-chart2 text-left card">
                        <div className="widget-content">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left pr-2 fsize-1">
                                <div className="widget-numbers mt-0 fsize-3 text-success">
                                  54%
                                </div>
                              </div>
                              <div className="widget-content-right w-100">
                                <div className="progress-bar-xs progress">
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    aria-valuenow={54}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "54%" }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="widget-content-left fsize-1">
                              <div className="text-muted opacity-6">
                                Expenses Target
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="card-shadow-warning mb-3 widget-chart widget-chart2 text-left card">
                        <div className="widget-content">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left pr-2 fsize-1">
                                <div className="widget-numbers mt-0 fsize-3 text-warning">
                                  32%
                                </div>
                              </div>
                              <div className="widget-content-right w-100">
                                <div className="progress-bar-xs progress">
                                  <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    aria-valuenow={32}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "32%" }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="widget-content-left fsize-1">
                              <div className="text-muted opacity-6">
                                Spendings Target
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                      <div className="card-shadow-info mb-3 widget-chart widget-chart2 text-left card">
                        <div className="widget-content">
                          <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left pr-2 fsize-1">
                                <div className="widget-numbers mt-0 fsize-3 text-info">
                                  89%
                                </div>
                              </div>
                              <div className="widget-content-right w-100">
                                <div className="progress-bar-xs progress">
                                  <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                    aria-valuenow={89}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    style={{ width: "89%" }}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="widget-content-left fsize-1">
                              <div className="text-muted opacity-6">
                                Totals Target
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="app-wrapper-footer">
                  <div className="app-footer">
                    <div className="app-footer__inner">
                      <div className="app-footer-left">
                        <ul className="nav">
                          <li className="nav-item">
                            <a href="javascript:void(0);" className="nav-link">
                              Footer Link 1
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="javascript:void(0);" className="nav-link">
                              Footer Link 2
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="app-footer-right">
                        <ul className="nav">
                          <li className="nav-item">
                            <a href="javascript:void(0);" className="nav-link">
                              Footer Link 3
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="javascript:void(0);" className="nav-link">
                              <div className="badge badge-success mr-1 ml-0">
                                <small>NEW</small>
                              </div>
                              Footer Link 4
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};
