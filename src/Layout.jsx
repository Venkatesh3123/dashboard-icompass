import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../src/layout.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faUser,
  faMoneyBill,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
export default function Layout() {
  const [back, setBack] = useState("");
  const [back1, setBack1] = useState("");
  const [back2, setBack2] = useState("");
  const [back3, setBack3] = useState("");
  const eventClick = () => {
    setBack("blue");
    setBack1("");
    setBack2("");
    setBack3("");
  };
  const eventClick1 = () => {
    setBack("");
    setBack1("blue");
    setBack2("");
    setBack3("");
  };
  const eventClick2 = () => {
    setBack("");
    setBack1("");
    setBack2("blue");
    setBack3("");
  };
  const eventClick3 = () => {
    setBack("");
    setBack1("");
    setBack2("");
    setBack3("blue");
  };
  return (
    <>
      <ul className="ul2">
        <h2 className="j">DASH BOARD</h2>
        <Link to="/userprofile" className="link">
          {" "}
          <li
            className="li2"
            onClick={eventClick}
            style={{ backgroundColor: `${back}` }}
          >
            <FontAwesomeIcon icon={faUser} />
            Userprofile
          </li>
        </Link>
        <Link to="/notifications" className="link">
          {" "}
          <li
            className="li2"
            onClick={eventClick1}
            style={{ backgroundColor: `${back1}` }}
          >
            <FontAwesomeIcon icon={faBell} />
            Notifications
          </li>
        </Link>
        <Link to="/billings" className="link">
          {" "}
          <li
            className="li2"
            onClick={eventClick2}
            style={{ backgroundColor: `${back2}` }}
          >
            {" "}
            <FontAwesomeIcon icon={faMoneyBill} />
            Billings
          </li>
        </Link>

        <Link to="/plannings" className="link">
          {" "}
          <li
            className="li2"
            onClick={eventClick3}
            style={{ backgroundColor: `${back3}` }}
          >
            {" "}
            <FontAwesomeIcon icon={faPuzzlePiece} />
            Plannings
          </li>
        </Link>
      </ul>
      <Outlet />
    </>
  );
}
