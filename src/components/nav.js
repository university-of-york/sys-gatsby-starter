import React from 'react'
import { Link } from 'gatsby'

class Nav extends React.Component {
  render() {
    return(
      <React.Fragment>
        <nav class='c-nav c-nav--main' role='navigation' id='Main-Navigation-2'>
        <ul class='c-nav__list c-nav__list--structural'>
          <li class='c-nav__item'><Link to='/'>Index</Link></li>
        </ul>
      </nav>
    </React.Fragment>);
  }
}

export default Nav
