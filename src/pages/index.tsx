import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "../components/image";
import SEO from "../components/seo";
import styled from "@emotion/styled";
import image1 from "../images/index/photo-1481931098730-318b6f776db0.jpg";
import image2 from "../images/index/photo-1595475038784-bbe439ff41e6.jpg";
import image3 from "../images/index/photo-1567181567863-dbec7cad7e6b.jpg";
import image4 from "../images/index/117bc02ee94e5391b57de17e7951c20b.jpg";
import image5 from "../images/index/photo-1591601392196-dd6afe757012.jpg";
import image6 from "../images/index/photo-1517741858398-433087302cf4.jpg";
import image7 from "../images/index/Chef003.jpg";
import image8 from "../images/index/photo-1577219491135-ce391730fb2c.jpg";
import image9 from "../images/index/Single_Plot.svg";
import image10 from "../images/index/photo-1596129098135-f397b7b61bf3.jpg";
import image11 from "../images/index/KC_API.jpg";
import image12 from "../images/index/photo-1515378791036-0648a3ef77b2.jpg";
import image13 from "../images/index/photo-1463569482774-e63b918040ff.jpg";
import image14 from "../images/index/photo-1531947398206-60f8e97f34a2.jpg";
import image15 from "../images/index/Front_of_House.svg";
import image16 from "../images/index/KC_Web.jpg";
import image17 from "../images/index/cup.jpg";
import image18 from "../images/index/KC_man_in_tshirt.jpg";
import image19 from "../images/index/KC_food_box.jpg";

const Headline = styled.h1`
  font-family: "Antique Oliver", sans-serif;
  max-width: 700px;
  padding-top: 72px;
  margin-left: 40%;
  padding-bottom: 360px;
  font-size: 96px;
  color: #1a1f3b;

  @media (max-width: 768px) {
    margin-left: 48px;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ReverseSection = styled.section`
  display: flex;
  flex-direction: row-reverse;
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
  border-top: 1px solid #1a1f3b;
  font-family: "Pilcrow", sans-serif;
  font-size: 18px;
`;

const Number = styled.span`
  font-family: "Pilcrow", sans-serif;
  display: inline-flex;
  background-color: #8998cc;
  color: white;
  font-size: 14px;
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  line-height: 14px;
`;

const BigNumber = styled.span`
  font-family: "Pilcrow", sans-serif;
  display: inline-flex;
  background-color: #8998cc;
  color: white;
  font-size: 20px;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  line-height: 20px;
`;

const IndexPage = () => (
  <Layout>
    <Header>
      <Headline>
        to-go <Crafted>crafted</Crafted>.
      </Headline>
    </Header>
    <SEO title="Home" />
    <Section style={{ backgroundColor: "#E5D1E6" }}>
      <Chunk>
        <div
          style={{
            marginTop: "-250px",
            overflow: "hidden",
            position: "relative",
            height: "800px",
            backgroundImage: `url(${image1})`,
            backgroundPosition: "right -200px",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </Chunk>
      <Chunk style={{ padding: "48px" }}>
        <div style={{ width: "360px" }}>
          <H2 style={{ color: "#1a1f3b" }}>
            Kitchens Confidential enables a unique food experience.
          </H2>
          <Overline>
            Combining finacial rigor and creative thinking, we help restaurants
            be ever more relevant in the future of delivery/take-out driven
            market.
          </Overline>
        </div>
      </Chunk>
    </Section>
    <Section
      style={{
        backgroundColor: "#1A1F3B",
        color: "white",
        height: "400px",
        padding: "48px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <H2 style={{ width: "420px", padding: "48px" }}>
        We believe in crafting a vibrant culture around food.
      </H2>
    </Section>
    <ReverseSection>
      <Chunk>
        <div
          style={{
            marginTop: "-250px",
            overflow: "hidden",
            position: "relative",
            height: "800px",
            backgroundImage: `url(${image2})`,
            backgroundSize: "900px",
            backgroundPosition: "center -300px",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "underline",
            color: "white",
          }}
        >
          <H1>playful</H1>
        </div>
      </Chunk>
      <Chunk
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px",
        }}
      >
        <div style={{ maxWidth: "250px" }}>
          <Overline>
            <H3>Playful</H3>
            <div>
              Kitchens Confidential assemble an exceptional selection of food
              and drink from the communities. We are always experimenting so
              that we can deliver rich and playful experiences with food.
            </div>
          </Overline>
        </div>
      </Chunk>
    </ReverseSection>
    <Section>
      <Chunk>
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            height: "800px",
            backgroundImage: `url(${image3})`,
            backgroundPosition: "center center",
            backgroundSize: "1700px",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "underline",
            color: "white",
            marginBottom: "-250px",
          }}
        >
          <H1>tasteful</H1>
        </div>
      </Chunk>
      <Chunk
        style={{
          padding: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "250px" }}>
          <Overline>
            <H3>Tasteful</H3>
            <div>
              At the heart of what we do is a focus on supporting the creation
              of quality food options, with transparent and ethical food
              sourcing, fair labor practices and a keen eye on health &amp;
              safety.
            </div>
          </Overline>
        </div>
      </Chunk>
    </Section>
    <ReverseSection>
      <Chunk>
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            height: "800px",
            backgroundImage: `url(${image4})`,
            backgroundPosition: "center center",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "underline",
            color: "white",
          }}
        >
          <H1>flavorful</H1>
        </div>
      </Chunk>
      <Chunk
        style={{
          marginTop: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px",
        }}
      >
        <div style={{ maxWidth: "250px" }}>
          <Overline>
            <H3>Flavorful</H3>
            <div>
              Variety is the spice of life, which is why our partners represent
              a diversity of cuisine types. Our tapestry of restaurants and
              chefs reflect the communities we work in.
            </div>
          </Overline>
        </div>
      </Chunk>
    </ReverseSection>
    <Section
      style={{ marginTop: "250px", backgroundColor: "#1A1F3B", color: "white" }}
    >
      <Chunk>
        <div
          style={{
            marginTop: "-125px",
            overflow: "hidden",
            position: "relative",
            height: "700px",
            backgroundImage: `url(${image5})`,
            backgroundPosition: "center center",
            backgroundSize: "1200px",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "underline",
            color: "white",
            marginBottom: "100px",
          }}
        ></div>
      </Chunk>
      <Chunk style={{ padding: "48px" }}>
        <H2 style={{ width: "240px" }}>
          Do what you do best and we got the rest.
        </H2>
        <div style={{ fontFamily: "Pilcrow-Medium", width: "380px" }}>
          Kitchen Confidential delivers sweet advantages. State-of-the-art,
          fully builtout kitchen space and an intelligently integrated consumer
          facing and back office management tech platform allow our restaurant
          partners to focus on crafting their food and gorw their dream.
        </div>
      </Chunk>
    </Section>
    <Section
      style={{
        backgroundImage: `url(${image6})`,
        height: "600px",
        backgroundPosition: "center -400px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "1600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <H1 style={{ maxWidth: "740px", padding: "48px" }}>
        CHEF’S KITCHENS TO DIE FOR.
      </H1>
    </Section>
    <Section
      style={{
        fontFamily: "Pilcrow-Medium",
        maxWidth: "740px",
        padding: "48px",
      }}
    >
      It is all about getting it right, and then some. Our kitchen design
      improves efficiency and stimulates creativity. Aside from the well
      equipped kitchens, there are plenty opportunities to exchange ideas and
      grow together.
    </Section>
    <Section>
      <Chunk>
        <div
          style={{
            marginTop: "125px",
            height: "700px",
            backgroundImage: `url(${image7})`,
            backgroundPosition: "center center",
            backgroundSize: "1200px",
            backgroundRepeat: "no-repeat",
            marginBottom: "-125px",
          }}
        ></div>
      </Chunk>
      <Chunk>
        <div
          style={{
            height: "700px",
            backgroundImage: `url(${image8})`,
            backgroundPosition: "center center",
            backgroundSize: "1200px",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </Chunk>
    </Section>
    <Section
      style={{
        height: "1200px",
        backgroundImage: `url(${image9})`,
        backgroundPosition: "-860px -1000px",
        backgroundSize: "2800px",
        backgroundRepeat: "no-repeat",
        transform: "scaleX(-1)",
      }}
    ></Section>
    <Section
      style={{
        height: "1200px",
        marginTop: "-1200px",
        alignItems: "flex-end",
        flexDirection: "column",
        zIndex: 1,
      }}
    >
      <div
        style={{
          width: "50%",
          padding: "96px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ maxWidth: "280px" }}>
          <H2>More than just a 240 sq. ft. kitchen</H2>
          <div style={{ fontFamily: "Pilcrow" }}>
            Each individual kitchen is furnished with an efficient layout,
            state-of-the-art equipment, and great vibes.
          </div>
        </div>
      </div>
      <div
        style={{
          alignSelf: "center",
          backgroundColor: "#E5D1E6",
          fontFamily: "Pilcrow",
          padding: "36px",
          maxWidth: "800px",
        }}
      >
        <div style={{ fontFamily: "Pilcrow-Heavy", marginBottom: "16px" }}>
          OUR KITCHEN AMENITIES
        </div>
        <Section>
          <Chunk>
            <ul>
              <li>Dedicated 24/7 Access</li>
              <li>Secure Loading/ Storage Area</li>
              <li>Scullery</li>
              <li>Breakroom and Lockers</li>
            </ul>
          </Chunk>
          <Chunk>
            <ul>
              <li>Utilities, Trash Removal, Pest Control</li>
              <li>
                Onsite Kitchens Confidential Staff, certificated by ServSafe
                with local Food Handler’s Permit
              </li>
            </ul>
          </Chunk>
        </Section>
      </div>
    </Section>
    <Section
      style={{
        backgroundImage: `url(${image10})`,
        height: "600px",
        backgroundPosition: "center center",
        backgroundSize: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <H1 style={{ maxWidth: "740px", padding: "48px" }}>TECH INWARD</H1>
    </Section>
    <Section
      style={{
        fontFamily: "Pilcrow-Medium",
        maxWidth: "740px",
        padding: "48px",
      }}
    >
      Behind the efficient operation are the technology solutions optimized for
      a take-out driven market. We help our restaurant partners streamline and
      manage back office functions–including supply-chain integration, payment
      APIs and marketing support.
    </Section>
    <Section>
      <Chunk>
        <img src={image11} />
      </Chunk>
    </Section>
    <Section>
      <Chunk
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px",
        }}
      >
        <div style={{ maxWidth: "250px" }}>
          <Overline>
            <H3 style={{ paddingRight: "120px" }}>
              INVENTORY IS THE SECRET SAUCE
            </H3>
            <div>
              By providing data to inform food supply management and a shared
              ordering service for common ingredients, our restaurant partners
              benefit from maximizing profit and better pricing options.
            </div>
          </Overline>
        </div>
      </Chunk>
      <Chunk>
        <div
          style={{
            marginTop: "-250px",
            overflow: "hidden",
            position: "relative",
            height: "700px",
            backgroundImage: `url(${image12})`,
            backgroundPosition: "-300px center",
            backgroundSize: "1400px",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "underline",
            color: "white",
          }}
        ></div>
      </Chunk>
    </Section>
    <Section style={{ flexDirection: "row-reverse" }}>
      <Chunk
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px",
        }}
      >
        <div style={{ maxWidth: "250px" }}>
          <Overline>
            <H3 style={{ paddingRight: "32px" }}>
              OUR TECH DELIVERS NOT JUST FOOD BUT FOOD EXPERIENCE
            </H3>
            <div>
              Our consumer-facing interface allows our restaurant partners to
              unleash their culinary creativity by customizing menu offerings
              and customizing recommendations.
            </div>
          </Overline>
        </div>
      </Chunk>
      <Chunk>
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            height: "700px",
            backgroundImage: `url(${image13})`,
            backgroundPosition: "center -400px",
            backgroundSize: "800px",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "underline",
            color: "white",
            marginBottom: "100px",
          }}
        ></div>
      </Chunk>
    </Section>
    <Section
      style={{
        backgroundImage: `url(${image14})`,
        height: "600px",
        backgroundPosition: "center -800px",
        backgroundSize: "2000px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <H1 style={{ maxWidth: "740px", padding: "48px" }}>EXPERIENCE FORWARD</H1>
    </Section>
    <Section
      style={{
        fontFamily: "Pilcrow-Medium",
        maxWidth: "740px",
        padding: "48px",
      }}
    >
      Take-out market is crowded but our restaurant partners stand out. We
      cultivate a liong lasting relationship between customers and our
      restaurant partners with engaged rituals and creative food experiences
      through our online and offline engagement.
    </Section>
    <Section
      style={{
        backgroundImage: `url(${image15})`,
        height: "700px",
        backgroundPosition: "calc(100% + 200px) -200px",
        backgroundSize: "1000px",
        backgroundRepeat: "no-repeat",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <div style={{ position: "absolute", right: "540px", top: "280px" }}>
        <BigNumber>1</BigNumber>
      </div>
      <div style={{ position: "absolute", right: "300px", top: "220px" }}>
        <BigNumber>2</BigNumber>
      </div>
      <div style={{ position: "absolute", right: "360px", top: "360px" }}>
        <BigNumber>3</BigNumber>
      </div>
      <div style={{ position: "absolute", right: "140px", top: "240px" }}>
        <BigNumber>4</BigNumber>
      </div>
      <div style={{ maxWidth: "350px", padding: "48px" }}>
        <div style={{ fontFamily: "Antique Oliver" }}>
          Kitchens Confidential
        </div>
        <div
          style={{
            fontFamily: "Antique Oliver",
            fontSize: "44px",
            fontWeight: "bold",
            marginBottom: "16px",
          }}
        >
          COUNTER
        </div>
        <Overline>
          <H3>A PLACE TO FEED A DIFFERENT CRAVING</H3>
          <div>
            From new dish tasting with music by local musician to hang shaking
            with chefs, COUNTER is an engaging and delightful retail experience
            centering around food and the lifestyle of food.
          </div>
        </Overline>
      </div>
      <div
        style={{
          alignSelf: "flex-end",
          maxWidth: "350px",
          padding: "48px",
          marginTop: "60px",
        }}
      >
        <Overline>
          <H3>
            <Number>1</Number> FOODIE MERCHANDISE
          </H3>
        </Overline>
        <Overline>
          <H3>
            <Number>2</Number> FOODIE EXPERIENCE BAR
          </H3>
        </Overline>
        <Overline>
          <H3>
            <Number>3</Number> ORDERING KIOSKS
          </H3>
        </Overline>
        <Overline>
          <H3>
            <Number>4</Number> CONNECTION TO THE KITCHEN
          </H3>
        </Overline>
      </div>
    </Section>
    <Section>
      <Chunk style={{ padding: "48px" }}>
        <img src={image16} />
      </Chunk>
      <Chunk>
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            height: "100%",
            backgroundImage: `url(${image17})`,
            backgroundPosition: "center -50px",
            backgroundSize: "100%",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "underline",
            color: "white",
            marginBottom: "100px",
          }}
        ></div>
      </Chunk>
    </Section>
    <Section style={{ flexDirection: "row-reverse" }}>
      <Chunk
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "48px",
        }}
      >
        <div style={{ maxWidth: "250px" }}>
          <Overline>
            <H3>A VISUAL FEAST</H3>
            <div>
              To compliment the food from our restaurant partners and culture we
              embodied, we craft a differentiating experience in the
              marketplace. A wonderful sensory feast of food and visual.
            </div>
          </Overline>
        </div>
      </Chunk>
      <Chunk>
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            height: "700px",
            backgroundImage: `url(${image18})`,
            backgroundPosition: "center center",
            backgroundSize: "1200px",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "underline",
            color: "white",
            marginBottom: "-250px",
          }}
        ></div>
      </Chunk>
    </Section>
    <Section style={{ flexDirection: "row-reverse" }}>
      <Chunk>
        <div
          style={{
            overflow: "hidden",
            position: "relative",
            height: "500px",
            backgroundImage: `url(${image19})`,
            backgroundPosition: "center center",
            backgroundSize: "1200px",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textDecoration: "underline",
            color: "white",
            marginBottom: "-100px",
          }}
        ></div>
      </Chunk>
      <Chunk></Chunk>
    </Section>
    <Footer />
  </Layout>
);

export default IndexPage;
