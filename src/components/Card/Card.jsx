import React from 'react'
import { TYPES } from '../../helpers/pokemonHelpers';
import { shortenStatName, capitalize, convertWeight, convertHeight } from '../../helpers/helpers';
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
      <div className="Card--info">
        <div className="Card--stats__types">
          {p.types.map(type => (
            <div className="stat-box" style={{ border: `1px solid ${color}` }}>
              {capitalize(type.type.name)}
            </div>
          ))}

        </div>

        <div className="Card--stats__stats">
          {p.stats.map(stat => <div className="stat-box" style={{ border: `1px solid ${color}` }}
            title={stat.stat.name}
          >
            {shortenStatName(stat.stat.name)} {stat["base_stat"]}
          </div>)}
        </div>

        <div className="Card--stats__size">
          <div className="stat-box" style={{ border: `1px solid ${color}` }}> {p["base_experience"]} EXP</div>
          <div className="stat-box" style={{ border: `1px solid ${color}` }}> {convertHeight(p.height)}FT</div>
          <div className="stat-box" style={{ border: `1px solid ${color}` }}> {convertWeight(p.weight)}LBS</div>
        </div>
      </div >
    </div >
  )
}
