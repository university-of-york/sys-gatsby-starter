import React from 'react'
// 
import Tooltip from './tooltip'

class Textfield extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  render() {
    return(
      <React.Fragment>
        <div class='c-form__element'>
          <label class='c-form__label' for='textfield'>
            Title <Tooltip>Information about the thing.</Tooltip>
          </label>
          <input
            class='c-form__input c-form__input--text'
            id='textfield'
            type='text'
            name='title'
            value={this.state.title}
            onChange={this.handleInputChange}
            placeholder='A title for the thing.' />
        </div>
      </React.Fragment>
    );

  }
}

export default Textfield
