import React from 'react'
import Header from './header'
import Nav from './nav'

class Layout extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Header />
        <Nav />
        <div class='o-grid__row'>
          <div class='o-grid__box o-grid__box--quarter'></div>
          <div class='o-grid__box o-grid__box--half'>
            <br />
            {this.props.children}
            <br />
          </div>
          <div class='o-grid__box o-grid__box--quarter'></div>
        </div>
        <br />
      </React.Fragment>);
  }
}

export default Layout
