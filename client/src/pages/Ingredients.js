import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Ingredients extends Component {
  state = {
    ingredients: []
  };

  componentDidMount() {
    // this.loadIngredients();
  }

  loadBooks = () => {
    API.getIngredients()
      .then(res =>
        this.setState({ ingredients: res.data, name: "" })
      )
      .catch(err => console.log(err));
  };

  deleteIngredient = id => {
    API.deleteIngredient(id)
      .then(res => this.loadIngredients())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name) {
      API.saveIngredient({
        name: this.state.name,
      })
        .then(res => this.loadIngredients())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Add Ingredients</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="ingredient"
                placeholder="Ingredient (required)"
              />
              <FormBtn
                disabled={!(this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Add Ingredient
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Pantry</h1>
            </Jumbotron>
            {this.state.ingredients.length ? (
              <List>
                {this.state.ingredients.map(ingredient => (
                  <ListItem key={ingredient._id}>
                    <Link to={"/ingredients/" + ingredient._id}>
                      <strong>
                        {ingredient.name}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteIngredient(ingredient._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Ingredients;
