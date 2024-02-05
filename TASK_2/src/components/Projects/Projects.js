import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/bill.png";
import emotion from "../../Assets/Projects/bot.png";
import editor from "../../Assets/Projects/ecommerce.png";
import chatify from "../../Assets/Projects/chat.png";
import suicide from "../../Assets/Projects/mind.png";
import bitsOfCode from "../../Assets/Projects/food.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              demoLink="https://react-firebase-chat-web-app.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              demoLink="https://app-register-theta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              demoLink="https://ecommerce-shopping-sports.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              demoLink="https://bill-74nl.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              demoLink="https://www.linkedin.com/posts/sohel-datta-68927828a_reactnative-webdevelopment-learningjourney-activity-7114282140153864192-VTFf?utm_source=share&utm_medium=member_desktop" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              demoLink="https://chatbot-one-gilt.vercel.app/"      
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
