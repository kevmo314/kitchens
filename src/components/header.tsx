import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";
import logo from "../images/header/KC_Logo_bw.png";
import background from "../images/header/Background.svg";

const Header = styled.header`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 3200px;
  height: 840px;
`;

const Navigation = styled.nav`
  display: flex;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 16px 48px;
`;

const Links = styled.div`
  flex: 1 0 auto;
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
`;

const NavLink = styled(Link)`
  color: white;
  font-family: "Antique Oliver", sans-serif;
  font-size: 14px;
  background-color: #1a1f3b;
  height: 30px;
  align-items: center;
  justify-content: center;
  display: flex;
  margin-left: 8px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 15px;
  padding: 0 16px;
`;

const Logo = styled.img`
  width: 150px;
`;

const Content = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

export default ({ children }: React.PropsWithChildren<{}>) => (
  <Header>
    <Navigation>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <Links>
        <NavLink to="/join-us">join us</NavLink>
        <NavLink to="/reasons-why">more reasons why</NavLink>
      </Links>
    </Navigation>
    <Content>{children}</Content>
  </Header>
);
