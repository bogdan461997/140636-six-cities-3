import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import Offer from "../offer/offer.jsx";
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      step: -1,
      offer: null,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <Offer
              onCardNameClick={(value) => {
                this.setState({
                  step: 0,
                  offer: value
                });
              }}
              offers={this.props.offers}
              offer={this.props.offers[0]}
              onPlaceCardMouseOver={
                (value) => {
                  this.setState({
                    selecdPlaceCard: value,
                  });
                }}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {offers} = this.props;

    if (this.state.step === -1) {
      return (
        <Main
          onCardNameClick={(value) => {
            this.setState({
              step: 0,
              offer: value
            });
          }}
          offers={offers}
          onPlaceCardMouseOver={
            (value) => {
              this.setState({
                selecdPlaceCard: value,
              });
            }}
        />
      );
    }

    if (this.state.step === 0) {
      return (<Offer
        offer={this.state.offer}
        onCardNameClick={(value) => {
          this.setState({
            step: 0,
            offer: value
          });
        }}
        offers={offers}
        onPlaceCardMouseOver={
          (value) => {
            this.setState({
              selecdPlaceCard: value,
            });
          }}
      />);
    }

    return null;
  }
}

App.propTypes = {
  offers: PropTypes.array.isRequired
};

export default App;
