import React from 'react'
import {
  shortenStatName,
  capitalize,
  convertWeight,
  convertHeight,
  getColor
} from '../../helpers/helpers';

import {
  Container,
  Header,
  Number,
  Name,
  Image,
  Info,
  Types,
  Stats,
  Box
} from './styles/';

import './styles/Card.scss';

export default function Card({ p }) {
  const img = p.sprites.other["official-artwork"]["front_default"];
  const color = getColor(p);

  return (
    <Container className="Card__container" id={p.id} color={color}>
      <Header>
        <Number className="Card__number" color={color}>
          <span>{p.id}</span>
        </Number>

        <Name>
          {p.name}
        </Name>
      </Header>

      <Image className="Card__image" src={img} alt="" />

      <Info className="Card__info">
        <Types color={color}>
          {
            p.types.map(type => (
              <Box
                key={type.type.name}
                color={color}
                className="Card__type"
              >
                {capitalize(type.type.name)}
              </Box>
            ))
          }
        </Types>

        <Stats>
          {
            p.stats.map(stat => (
              <Box
                key={stat.stat.name}
                color={color}
              >
                {shortenStatName(stat.stat.name)} {stat["base_stat"]}
              </Box>
            ))
          }
        </Stats>

        <Stats className="Card--stats__size">
          <Box className="Card__stats-exp" color={color}> {p["base_experience"]} EXP</Box>

          <Box className="Card__stats-height" color={color}> {convertHeight(p.height)} FT</Box>

          <Box className="Card__stats-weight" color={color}> {convertWeight(p.weight)} LBS</Box>
        </Stats>
      </Info>

    </Container >
  )
}
