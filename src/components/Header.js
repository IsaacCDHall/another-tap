import React, {Component} from 'react';
import { Link, HashRouter } from 'react-router-dom';

class Header extends Component {
  render(){
    return (
      <div className="header">
        <HashRouter>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <a><h3>Home</h3></a>
          </Link>
          <Link to='/Beers' style={{ textDecoration: 'none', color: 'white' }}>
            <a><h3>Beers</h3></a>
          </Link>
        </HashRouter>
      </div>
    );

  }
}

export default Header;
