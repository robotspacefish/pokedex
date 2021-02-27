import React from 'react'
import { capitalize } from '../../helpers/helpers';

import './Featured.scss';

export default function Featured(props) {
  let img = props.sprites.other["official-artwork"]["front_default"];

  return (
    <div className="Featured">
      <h2>Featured</h2>
      <img src={img} alt={props.name} />
      <h3>{capitalize(props.name)}</h3>
    </div>
  )
}
