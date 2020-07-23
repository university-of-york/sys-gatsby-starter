import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCarrot, faMoneyBill, faCubes } from '@fortawesome/free-solid-svg-icons'

class Table extends React.Component {
  constructor(props) {
    super(props);

    // Usually you'd populate "items" from some API call.
    this.state = {
      items: [
        { 'name': 'Cucumber',
          'price': 3,
          'stock': 10 },
        { 'name': 'Carrot',
          'price': 5,
          'stock': 6 },
        { 'name': 'Cauliflower',
          'price': 7,
          'stock': 10
        }
      ]
    };

  }

  render() {
    const { items } = this.state;

    return(
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>Vegetable <FontAwesomeIcon icon={faCarrot} /></th>
              <th>Price <FontAwesomeIcon icon={faMoneyBill} /></th>
              <th>Stock <FontAwesomeIcon icon={faCubes} /></th>
            </tr>
          </thead>
          <tbody>
    	{
    	  items.map((item, index) => (
    	    <tr key={index}>
    	      <td key="0">{item.name}</td>
    	      <td key="1">{item.price}</td>
              <td key="2">{item.stock}</td>
    	    </tr>
    	  ))
    	}
          </tbody>
        </table>
      </React.Fragment>);
      }
    }


export default Table
