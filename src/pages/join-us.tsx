import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "../components/image";
import SEO from "../components/seo";
import styled from "@emotion/styled";

import danny from "../images/join-us/Danny.jpg";
import hudson from "../images/join-us/Hudson.jpg";
import thabo from "../images/join-us/Thabo.jpg";
import jen from "../images/join-us/Jen.jpg";

const Headline = styled.h1`
  font-family: "Antique Oliver", sans-serif;
  max-width: 400px;
  font-size: 48px;
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Chunk = styled.div`
  flex: 1 0 50%;
`;

const Overline = styled.div`
  font-family: "Pilcrow-Medium", sans-serif;
  border-top: 1px solid #1a1f3b;
  max-width: 400px;
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

const Input = styled.input`
  font-family: "Pilcrow", sans-serif;
  background-color: white;
  color: black;
  margin-bottom: 8px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  line-height: 48px;
  border: none;
`;

const Button = styled.button`
  font-family: "Pilcrow", sans-serif;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  height: 48px;
  width: 100%;
  border: none;
  text-align: left;
  padding: 0 16px;
`;

const Form = styled.form`
  padding: 48px;

  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

function Profile({
  image,
  name,
  role,
  email,
  phone,
}: {
  image: string;
  name: string;
  role: string;
  email: string;
  phone: string;
}) {
  return (
    <div
      style={{
        color: "white",
        marginBottom: "64px",
        maxWidth: "100%",
        paddingRight: "16px",
      }}
    >
      <div
        style={{
          height: "160px",
          width: "160px",
          backgroundImage: `url(${image})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "160px",
        }}
      />
      <div style={{ fontWeight: "bold" }}>{name}</div>
      <div>{role}</div>
      <div style={{ marginTop: "16px" }}>
        <a
          href={`mailto:${email}@kitchensconfidential.com`}
          style={{
            color: "white",
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          <span>{email}@</span>
          <br />
          <span>kitchensconfidential.com</span>
        </a>
      </div>
      <div>
        <span style={{ fontWeight: "bold" }}>m</span> {phone}
      </div>
    </div>
  );
}

const JoinUsPage = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [about, setAbout] = React.useState("");
  const [restaurant, setRestaurant] = React.useState("");
  const [comment, setComment] = React.useState("");

  return (
    <Layout>
      <SEO title="Home" />
      <Header>
        <Section>
          <Chunk style={{ padding: "48px" }}>
            <Headline>Are you ready? We are.</Headline>
            <Overline>
              We would love to learn more about you or your restaurant and
              explore how we can meet your needs and welcome you to the future
              of food community. Please fill out the form and we will reach out
              to you.
            </Overline>
          </Chunk>
          <Chunk>
            <Form
              action="https://getform.io/f/1a20fa71-e8a5-424d-9b1a-d96f0b2326c1"
              method="POST"
              onSubmit={(e) => {
                fetch(e.currentTarget.action, {
                  method: e.currentTarget.method,
                  mode: "cors",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    name,
                    email,
                    phone,
                    restaurant,
                    comment,
                  }),
                }).then(() => {
                  alert("Thanks, we'll be in touch soon!");
                });

                e.currentTarget.reset();
                e.preventDefault();
              }}
            >
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div style={{ display: "flex", marginTop: "32px" }}>
                <select
                  style={{
                    flex: "0 0 50%",
                    marginRight: "8px",
                    border: "none",
                    height: "48px",
                    fontFamily: '"Pilcrow", sans-serif',
                    padding: "0 16px",
                  }}
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                >
                  <option disabled value="">
                    Tell us about you
                  </option>
                  <option value="Restaurant">Restaurant</option>
                  <option value="Customer">Customer</option>
                  <option value="Investor">Investor</option>
                </select>
                <Input
                  type="text"
                  placeholder="Restaurant Name"
                  value={restaurant}
                  onChange={(e) => setRestaurant(e.target.value)}
                />
              </div>
              <Input
                type="text"
                placeholder="What's on your mind?"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />

              <Button type="submit">
                <span style={{ fontWeight: "bold", marginRight: "16px" }}>
                  submit
                </span>{" "}
                Looking forward to connect!
              </Button>
            </Form>
          </Chunk>
        </Section>
      </Header>
      <main style={{ backgroundColor: "#1a1f3b" }}>
        <Section style={{ padding: "128px 0" }}>
          <Chunk>
            <H2 style={{ color: "#00907C", padding: "48px" }}>
              What makes us the best team for you? We believe, through food, we
              can cultivate an engaged and enthusiastic community with a vibrant
              culture.
            </H2>
          </Chunk>
          <Chunk style={{ padding: "0 48px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                fontFamily: "Pilcrow",
              }}
            >
              <div style={{ flex: "0 0 50%" }}>
                <Profile
                  image={danny}
                  name="Danny Bin"
                  role="Finance &amp; Engineering"
                  email="danny"
                  phone="917-292-8318"
                />
              </div>
              <div style={{ flex: "0 0 50%" }}>
                <Profile
                  image={thabo}
                  name="Thabo Lenneiye"
                  role="Design &amp; Experience"
                  email="thabo"
                  phone="267-205-2253"
                />
              </div>
              <div style={{ flex: "0 0 50%" }}>
                <Profile
                  image={hudson}
                  name="Hudson Tang"
                  role="Operations &amp; Partnership"
                  email="hudson"
                  phone="917-916-8680"
                />
              </div>
              <div style={{ flex: "0 0 50%" }}>
                <Profile
                  image={jen}
                  name="Jen Liao"
                  role="Brand Strategy &amp; Marketing"
                  email="jen"
                  phone="202-459-1988"
                />
              </div>
            </div>
          </Chunk>
        </Section>
      </main>
      <Footer />
    </Layout>
  );
};

export default JoinUsPage;
