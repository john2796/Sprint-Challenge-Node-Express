import React, { Component } from "react";
import { connect } from "react-redux";
import { getListAction } from "../store/actions/projectAction";
import { Card, Button, CardTitle, CardText, Row, Col } from "reactstrap";

class ProjectCardAction extends Component {
  componentDidMount() {
    this.props.getListAction();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>render list of action here</h1>
        {this.props.action.map(x => {
          return (
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>{x.description}</CardTitle>
                  <CardText>{x.notes}</CardText>
                  <CardText>Complted : {x.completed}</CardText>
                </Card>
              </Col>
            </Row>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  action: state.projectReducer.action
});

export default connect(
  mapStateToProps,
  { getListAction }
)(ProjectCardAction);
