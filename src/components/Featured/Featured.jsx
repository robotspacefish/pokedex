import React from 'react'
import { capitalize } from '../../helpers/helpers';

import './Featured.scss';

export default function Featured(props) {
  let img = props.sprites.other["official-artwork"]["front_default"];
  return (
    <div className="Featured">
      <h1>Featured</h1>
      { img && <img src={img} />}
      <h2>{capitalize(props.name)}</h2>
    </div>
  )
}
