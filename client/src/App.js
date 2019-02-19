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
    if (!this.state.name || !this.state.description) {
      alert("All fields are required");
      return;
    }
    const post = {
      name: this.state.name,
      description: this.state.description
    };
    this.props.postProjects(post);
    console.log(post);
    this.setState({ name: "", description: "" });
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
        <Form inline onSubmit={this.handleSubmit}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">
              Email
            </Label>
            <Input
              onChange={this.handleChange}
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleText">description</Label>
            <Input
              onChange={this.handleChange}
              type="textarea"
              name="description"
              value={this.state.description}
            />
          </FormGroup>
          <Button type="submit">Submit</Button>
        </Form>
        {this.props.loading && <h1>Loading . . . </h1>}
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
  projects: state.projectReducer.projects,
  loading: state.projectReducer.loading
});

export default connect(
  mapStateToProps,
  { getProjects, postProjects }
)(App);
