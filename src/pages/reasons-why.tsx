import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "../components/image";
import SEO from "../components/seo";
import styled from "@emotion/styled";

import image1 from "../images/reasons-why/photo-1515114209305-4be923b44c72.jpg";
import image2 from "../images/reasons-why/Plaxall-Anable-Basin-1.jpg";

const Headline = styled.h1`
  font-family: "Antique Oliver", sans-serif;
  max-width: 540px;
  padding: 48px;
  font-size: 48px;
  color: #1a1f3b;
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

const Overline = styled.div`
  font-family: "Pilcrow-Medium", sans-serif;
  border-top: 1px solid white;
  max-width: 400px;
  color: white;
`;

const ReasonsWhyPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header>
      <Section>
        <Chunk>
          <Headline>
            We are excited about where we are headed and want to share with you.
          </Headline>
        </Chunk>
        <Chunk></Chunk>
      </Section>
    </Header>
    <main style={{ backgroundColor: "#1a1f3b" }}>
      <Section style={{ padding: "96px 48px" }}>
        <Chunk>
          <H2 style={{ color: "#00907C" }}>Positive Numbers</H2>
          <Overline>
            We work hard on crafting a financial model that will make positive
            impacts on your bottom line so you are empowered to grow your dream.
          </Overline>
        </Chunk>
        <Chunk>
          <H2 style={{ color: "#00907C" }}>Health &amp; Safty Commitments</H2>
          <Overline>
            We are commited to the well-being of our partners and customers by
            providing clear guidlines and supports. Together, we can create a
            safe and healthy environment to cook and to enjoy food.
          </Overline>
        </Chunk>
      </Section>
      <Section style={{ padding: "32px 48px" }}>
        <H2 style={{ color: "#00907C" }}>Our next move</H2>
      </Section>
      <Section
        style={{ color: "white", padding: "0 48px", marginBottom: "96px" }}
      >
        <Chunk>
          <div
            style={{
              marginRight: "16px",
              backgroundImage: `url(${image1})`,
              backgroundSize: "800px",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              height: "400px",
              marginBottom: "16px",
            }}
          ></div>
          <H2 style={{ color: "#00907C" }}>
            Ironside
            <br />
            Newark, NJ
          </H2>
          <h3 style={{ color: "#00907C" }}>Spring 2021</h3>
          <Overline>
            Ironside, the newest Newark central business hub, is a state-of-the
            art office and retail destination with plenty of historical charm.
          </Overline>
        </Chunk>
        <Chunk>
          <div
            style={{
              marginRight: "16px",
              backgroundImage: `url(${image2})`,
              backgroundSize: "800px",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              height: "400px",
              marginBottom: "16px",
            }}
          ></div>
          <H2 style={{ color: "#00907C" }}>
            Falchi
            <br />
            Long Island, NY
          </H2>
          <h3 style={{ color: "#00907C" }}>Summer 2021</h3>
          <Overline>
            We would love to learn more about you or restaurant and explore how
            we can meet your needs and welcome you into the future of food
            community.
          </Overline>
        </Chunk>
      </Section>
    </main>
    <Footer />
  </Layout>
);

export default ReasonsWhyPage;
