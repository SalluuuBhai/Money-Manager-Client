import React from "react";
import { Container, Navbar, NavDropdown } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

import {
  BsFillEmojiWinkFill,
  BsFillTabletFill,
  BsSpeedometer,
} from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { TiChartArea, TiFolder, TiSpanner } from "react-icons/ti";
import { BiTable } from "react-icons/bi";
import incomeLogo from "../../icons/income.png";
import expenseLogo from "../../icons/spending-money.png";
import dashboardLogo from "../../icons/dashboard.png";
import "../../App.css";

const Sidebar = () => {
  const history = useHistory();
  return (
    <>
      <Navbar className="col-md-12   bg-light sidebar">
        <Container>
          <div>
            <img src={dashboardLogo} alt="income" style={{ width: "12%" }} />
            <Link className="nav-name" onClick={() => history.push("/")}>
              Dashboard
            </Link>
          </div>
          <div className="nav-box">
            {/* <i className="icon-nav"><BsFillEmojiWinkFill/></i> */}
            <img src={incomeLogo} alt="income" style={{ width: "15%" }} />
            <Link className="nav-name" onClick={() => history.push("/income")}>
              Income
            </Link>
          </div>
          <hr />
          <div className="nav-box">
            {/* <i className="icon-nav"><BsSpeedometer/></i> */}
            <img src={expenseLogo} alt="income" style={{ width: "15%" }} />
            <Link className="nav-name" onClick={() => history.push("/expense")}>
              Expense
            </Link>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Sidebar;
