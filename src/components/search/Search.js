import React, { useEffect } from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router";
//Style
import "./Search.scss"
//Icon
import SearchIcon from "../../assets/icons/search.png"
//Actions
import {changeKeyword, clearKeyword} from "../../redux/Search/SearchAction"
import PropTypes from "prop-types";

function Search(props) {
  const {changeKeyword, keyword , location, clearKeyword} = props

  const onChange = e =>{
    changeKeyword(e.target.value)
  }

  useEffect(() => {
    clearKeyword()    
  }, [location, clearKeyword])

  return (
    <div className="form-group search">
      <input
          className="form-control"
          type="text" 
          placeholder="Type here to search"
          name="search"
          onChange={onChange}
          value={keyword || ''}
      />
      <img className="icon" src={SearchIcon} alt="search" />
    </div>
  );
}
Search.propTypes = {
  changeKeyword: PropTypes.func,
  clearKeyword: PropTypes.func,
  selected: PropTypes.array,
  location: PropTypes.object,
};

const mapStateToProps = state => {
  return {
    keyword:state.search.keyword,
    location:state.routing
  };
};

const mapStateToAction = dispatch => {
  return {
    changeKeyword: key => dispatch(changeKeyword(key)),
    clearKeyword: () => dispatch(clearKeyword())
  };
};

export default connect(mapStateToProps, mapStateToAction)(withRouter(Search));