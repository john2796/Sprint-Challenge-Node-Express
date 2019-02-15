import React from "react";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

const ProjectCard = ({ project }) => {
  return (
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>{project.name}</CardTitle>
          <CardText>{project.description}</CardText>
          <Button>Check more info here</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default ProjectCard;
