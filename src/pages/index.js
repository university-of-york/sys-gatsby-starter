import React from 'react'
import Layout from '../components/layout'
import Alert from '../components/alert'
import Textfield from '../components/textfield'
import Table from '../components/table'

class Index extends React.Component {
  render() {
    return(
      <React.Fragment>
        <Layout>
          <h3>Gatsby starter demo</h3>
          <p>Uses the CSS, fonts and (some) components from the University's <a href="https://www.york.ac.uk/pattern-library">digital pattern library</a>.</p> 
          <br />
          <p>A generic alert:</p>
          <Alert />
          <br />
          <br />
          <br />
          <p>A textfield with a tooltip:</p>
          <Textfield />
          <br />
          <br />
          <br />
          <p>A basic table with some FontAwesome icons:</p>
          <Table />
        </Layout>
      </React.Fragment>
    );
  }
}

export default Index;
