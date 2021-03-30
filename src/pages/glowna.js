import React from "react";
//styling
import styled from "styled-components";
import Post from "../components/Post";
//styling
import hiroshima from "../images/hiroshima.jpg";
import nagasaki from "../images/nagasaki.jpg";
import galeria from "../images/galeria.jpeg";
import statua from "../images/Pom.Pokoju.Hiroszima.SmartAge.PL.jpg";
import Line from "../components/Line";
//react-router
import { Link } from "react-router-dom";

const Glowna = () => {
  return (
    <AboutComponent>
      <div className="header">
        <h1>Hougeki</h1>
        <div className="spans">
          <span>
            <Link to="/o-projekcie" className="link">
              O projekcie
            </Link>
          </span>
          <span>
            <Link to="/zrodla" className="link">
              Źródła
            </Link>
          </span>
        </div>
      </div>
      <Line width="90%" color="white" />
      <div className="posts">
        <Post
          source={hiroshima}
          alt="hiroshima"
          text="Hiroshima"
          link="/hiroshima"
        />
        <Post
          source={statua}
          alt="upamietnienie"
          text="Upamietnienie"
          link="/upamietnienie"
        />
        <Post
          source={nagasaki}
          alt="nagasaki"
          text="Nagasaki"
          link="/nagasaki"
        />
        <Post
          source={galeria}
          alt="galeria"
          text="Galeria pamieci"
          link="/galeria"
        />
      </div>
    </AboutComponent>
  );
};

const AboutComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    color: white;
    h1 {
      font-size: 2.6rem;
    }
    .spans {
      span {
        padding: 0 1rem;
        .link {
          text-decoration: none;
          color: white;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
      }
    }
  }
  h1 {
    color: white;
  }
  .posts {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Glowna;
