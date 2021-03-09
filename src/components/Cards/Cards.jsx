import React from 'react'
import Card from '../Card/Card';
import './Cards.scss';

export default function Cards({ pokemon }) {
  return (
    <div className="Cards">
      {
        pokemon.map(p => <Card key={p.id} p={p} />)
      }
    </div>
  )
}
