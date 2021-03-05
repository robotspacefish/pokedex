import React from 'react'
import { getRandomColor } from '../../helpers/helpers';

import './Loader.scss';

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    };
  }

  componentDidMount() {
    this.setNewColor();
    this.interval = setInterval(this.setNewColor, 300)
  }

  setNewColor = () => {
    this.setState({ color: getRandomColor() })
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="Loader">
        <div className="loader" style={{ borderTop: `16px solid ${this.state.color}` }}></div>
      </div>
    )
  }
}

export default Loader;