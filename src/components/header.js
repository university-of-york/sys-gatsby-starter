import React from 'react'
import { Link } from 'gatsby'

class Header extends React.Component {
  render() {
    return(
      <React.Fragment>
        <header class='c-main-header' role='banner'>
          <div class='o-wrapper o-grid'>
            <div class='o-grid__row'>
              <div class='o-grid__box o-grid__box--threequarters o-grid__box--threequarters@medium o-grid__box--threequarters@small o-grid__box--threequarters@tiny'>
                <h2 class='c-main-header__title'>
                <Link to='/'>
                <img class='c-main-header__logo' src='https://www.york.ac.uk/static/stable/img/logo.svg' alt='University of York'></img>
                </Link>
                </h2>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>);
  }
}

export default Header
