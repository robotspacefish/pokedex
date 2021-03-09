import React, { Component } from 'react';
import './BackToTopButton.scss';

export default class BackToTopButton extends Component {
  componentDidMount() {
    const options = {
      root: null,
      // rootMargin: '2000px 0px 0px 0px',
    };
    this.observer = new IntersectionObserver((entries, observer) => this.handleObserve(entries, observer));
    this.observer.observe(document.querySelector('.Pokedex'));
  }

  handleObserve = (entries, observer) => {
    if (!entries[0].isIntersecting) return;

    // if (entries[0].target.top <= "-2000px") console.log(entries)

  }

  render() {
    return (
      <button className="BackToTopButton">
        UP
      </button>
    )
  }
}
