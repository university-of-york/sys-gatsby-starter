import React from 'react'
import '../styles/tooltip.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

// A 'tooltip' component. Provides an "i" circle FontAwesome icon
// which displays text when hovered over. The text is set through
// this.props.children.
class Tooltip extends React.Component {
  render() {
    return(
      <React.Fragment>
        <div class='tooltip'>
          <FontAwesomeIcon icon={faInfoCircle} />
          <span class='tooltiptext'>
            <small>
              {this.props.children}
            </small>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default Tooltip
