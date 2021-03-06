import React, { useState } from 'react';
import { MenuItems2 } from './Menuitems2';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown2() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
      <div>    
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems2.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown2;