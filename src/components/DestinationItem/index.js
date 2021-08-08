import {Component} from 'react'

import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationDetails} = this.props
    const {imgUrl, name, country} = destinationDetails
    return (
      <li className="destination-item">
        <img src={imgUrl} alt={name} className="destination-image" />
        <p className="name">{name}</p>
        <p className="country">
          <span className="location">Location:</span>
          {country}
        </p>
      </li>
    )
  }
}

export default DestinationItem
