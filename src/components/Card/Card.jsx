import React from 'react'
import { TYPES } from '../../helpers/pokemonHelpers';
import './Card.scss';

export default function Card({ p }) {
  const img = p.sprites.other["official-artwork"]["front_default"];
  const color = TYPES[p.types[0].type.name];

  return (
    <div className="Card" style={{ border: `2px solid ${color}` }}>
      <header>
        <div className="Card--number" style={{ backgroundColor: color }}>
          <span>{p.id}</span>
        </div>

        <h3 className="Card--name">{p.name}</h3>
      </header>
      <img src={img} alt="" />
    </div>
  )
}
