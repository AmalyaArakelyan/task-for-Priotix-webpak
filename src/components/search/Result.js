import React, { useEffect } from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router";
//Components
import Item from "./Item.js"
import Error from "./Error.js"
import Loading from "../layout/Loading.js"
//Actions
import {searchTournament, selectItem} from "../../redux/Tournament/TournamentAction.js"
import {ListGroup} from "react-bootstrap";
import PropTypes from "prop-types";


function Result(props) {
    const {
        keyword ,
        loading,
        searchTournament,
        error,
        searchResult,
        selectItem,
        selected,
    } = props
    
    useEffect(() => {
        searchTournament()
    }, [keyword, searchTournament])
    
    const select = (item) =>{
        if(!selected[item.id]){
            selectItem(item)
        }
    }
    
    return (
        <div className="result">
            
            {searchResult && searchResult.length ?
                <div className="list">
                    <ListGroup>
                        {
                            searchResult.map(item =>{
                                return <ListGroup.Item key={item.id} onClick={() => select(item)}>
                                    <Item
                                        item={item}
                                        added={!!selected[item.id]}
                                    />
                                </ListGroup.Item>
                    
                            })
                        }
                    </ListGroup>
                </div>
                : loading?
                    <Loading/>
                : <Error error={error}/>
            }
        </div>
    );
}
Result.propTypes = {
    error: PropTypes.object,
    keyword: PropTypes.string ,
    loading: PropTypes.bool,
    searchTournament: PropTypes.func,
    searchResult: PropTypes.array,
    selectItem: PropTypes.func,
    selected: PropTypes.object,
};

const mapStateToProps = state => {
    return {
        keyword:state.search.keyword,
        searchResult:state.tournament.searchResult,
        selected:state.tournament.selected,
        loading:state.tournament.loading,
        error:state.tournament.error,
    };
};

const mapStateToAction = dispatch => {
    return {
        searchTournament: () => dispatch(searchTournament()),
        selectItem: (item) => dispatch(selectItem(item)),
    };
};

export default connect(mapStateToProps, mapStateToAction)(withRouter(Result));