import React from 'react'

class Alert extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dismissed: false
    };

    this.dismiss = this.dismiss.bind(this);
  }

  dismiss() {
    this.setState({
      dismissed: true
    });
  }

  render() {
    const { dismissed } = this.state;

    if (dismissed) {
      return null;
    } else {
      return(
        <React.Fragment>
          <div class='c-alert c-alert--info' role='alert'>
            <div class='c-alert__content'>
              <p><strong>There's something that needs doing...</strong></p>
              <p>Please fix this :-)</p>
              <button class='c-btn c-btn--secondary c-btn--medium' onClick={this.dismiss}>Dismiss</button>
            </div>
          </div>
        </React.Fragment>);
    }
  }
}

export default Alert
