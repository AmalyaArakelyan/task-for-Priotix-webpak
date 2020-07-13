import React from 'react';
import PropTypes from 'prop-types';
//redux
import {connect} from "react-redux";
//Bootstrap
import { Navbar} from 'react-bootstrap';
//Router
import { NavLink } from 'react-router-dom';



function NavBar(props) {
    const {selected} = props

  return (
      <Navbar bg="dark" variant="dark" expand="lg">
          <NavLink
              isActive={(match, location) => {
                  if (match && match.url === "/") {
                      return true;
                  }
                  return false;
              }}
              className='nav-link' to={'/'} >Home
          </NavLink>
          <NavLink className='nav-link' to={'/tournaments'} >
              Tournaments
              <span> {Object.values(selected).length}</span>
              
          </NavLink>
          
       </Navbar>
  );
}
NavBar.propTypes = {
    selected: PropTypes.object
};

const mapStateToProps = state => {
    return {
        selected:state.tournament.selected,
    };
};

export default connect(mapStateToProps)(NavBar);