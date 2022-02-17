import React from 'react';
import './styles.css';

const ListItem = ({
  item: { coverSrc, title, price,  rating },
}) => (
  <div className='listItem-wrap'>
    <img src={coverSrc} alt='' />
    <header>
      <h4>{title}</h4>
      <span>🌟{rating}</span>
    </header>
    <footer>
      <p>
        <b>Rs{price}</b>
      </p>
    </footer>
  </div>
);

export default ListItem;