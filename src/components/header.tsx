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

const Navigation = styled.nav<{ isJsEnabled: boolean; transparent: boolean }>`
  background-color: ${({ transparent }) =>
    transparent ? "transparent" : "white"};
  box-shadow: ${({ transparent }) =>
    transparent ? "none" : "1px 1px 8px #333"};
  transition: all 0.3s;
  position: ${({ isJsEnabled }) => (isJsEnabled ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
`;

const Gutters = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  width: 100%;
  padding: 16px 48px;
  display: flex;
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
  margin-bottom: 0;
`;

const Content = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  margin-top: 120px;
`;

export default ({ children }: React.PropsWithChildren<{}>) => {
  const [top, setTop] = React.useState(true);
  const [isJsEnabled, setJsEnabled] = React.useState(false);

  React.useEffect(() => {
    const listener = () => {
      setTop(document.body.getBoundingClientRect().top === 0);
    };
    setJsEnabled(true);
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []);

  return (
    <Header>
      <Navigation transparent={top} isJsEnabled={isJsEnabled}>
        <Gutters>
          <Link to="/">
            <Logo src={logo} />
          </Link>
          <Links>
            <NavLink to="/join-us">join us</NavLink>
            <NavLink to="/reasons-why">more reasons why</NavLink>
          </Links>
        </Gutters>
      </Navigation>
      <Content>{children}</Content>
    </Header>
  );
};
