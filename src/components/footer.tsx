import * as React from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import logomark from "../images/K_white.png";

const Headline = styled.h1`
  max-width: 400px;
  padding-top: 72px;
  margin-left: 300px;
  padding-bottom: 360px;
  font-size: 96px;
  color: #1a1f3b;
`;

const Crafted = styled.span`
  text-decoration: underline;
`;

const Section = styled.section`
  display: flex;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
`;

const Chunk = styled.div`
  flex: 1 0 50%;
`;

const H1 = styled.h1`
  font-family: "Antique Oliver", sans-serif;
  font-size: 96px;
`;

const H2 = styled.h2`
  font-family: "Antique Oliver", sans-serif;
  font-size: 36px;
`;

const H3 = styled.h3`
  font-family: "Pilcrow-Medium", sans-serif;
  text-transform: uppercase;
  font-size: 18px;
  margin-bottom: 8px;
`;

export default function () {
  return (
    <div
      style={{
        flex: "1 0 auto",
        backgroundColor: "#1A1F3B",
      }}
    >
      <Section
        style={{
          color: "white",
          flexDirection: "column",
        }}
      >
        <H2
          style={{
            margin: "48px",
            width: "360px",
            color: "#00907C",
          }}
        >
          Food, after all, should be a playful, tasteful, and flavorful
          experience.
        </H2>
        <H2 style={{ margin: "36px 48px", width: "240px" }}>to-go crafted.</H2>
      </Section>
      <Section
        style={{
          backgroundColor: "#1A1F3B",
          paddingBottom: "48px",
        }}
      >
        <Chunk style={{ display: "flex" }}>
          <div
            style={{
              fontFamily: '"Antique Oliver", sans-serif',
              backgroundColor: "#00907C",
              height: "48px",
              borderRadius: "24px",
              color: "white",
              padding: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "36px 48px",
              fontSize: "24px",
            }}
          >
            Are you ready?
          </div>
        </Chunk>
        <Chunk>
          <div
            style={{ display: "flex", color: "white", alignItems: "center" }}
          >
            <img
              src={logomark}
              style={{ height: "70px", marginRight: "16px", marginBottom: 0 }}
            />
            <div style={{ fontFamily: "Pilcrow" }}>
              <div style={{ fontFamily: "Pilcrow-Heavy" }}>
                Kitchens Confidential
              </div>
              <div>
                <Link to="/join-us" style={{ color: "white" }}>
                  Join us
                </Link>
              </div>
              <div>
                <Link to="/reasons-why" style={{ color: "white" }}>
                  More reasons why
                </Link>
              </div>
            </div>
          </div>
        </Chunk>
      </Section>
    </div>
  );
}
