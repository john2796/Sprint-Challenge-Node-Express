import React, { Component } from "react";
import "./App.css";
import NavbarPage from "./components/Navbar/Navbar";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { getProjects, postProjects } from "./store/actions/projectAction";

import ProjectsList from "./components/ProjectsList";
import ProjectCardAction from "./components/ProjectCardAction";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const post = {
      name: this.state.name,
      description: this.state.description
    };
    this.props.postProjects(post);
  };

  componentDidMount() {
    this.props.getProjects();
  }
  "";
  render() {
    const { projects } = this.props;

    return (
      <div className="App">
        <NavbarPage />
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">
              Email
            </Label>
            <Input type="text" name="name" placeholder="name" />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">description</Label>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
        <Route
          exact
          path="/"
          render={props => <ProjectsList projects={projects} {...props} />}
        />
        <Route
          path="/action/:id"
          render={props => <ProjectCardAction {...props} />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projectReducer.projects
});

export default connect(
  mapStateToProps,
  { getProjects, postProjects }
)(App);
