import React, {useState} from "react";
import {connect} from "react-redux";
import { withRouter } from "react-router";
//Actions
import {deleteItem} from "../../redux/Tournament/TournamentAction.js"
import {ListGroup} from "react-bootstrap";
//Components
import Item from "../search/Item.js";
import PropTypes from "prop-types";
import ConfirmModal from "./ConfirmModal.js"

function Tournament(props) {
    const {
        selected,
        deleteItem
    } = props
    const [open, setOpen] = useState(false)
    const deleteSelected = (id) => {
        deleteItem(id)
    }
    const openModal = (id) => {
        setOpen(id)
    }
    const closeModal = () => {
        setOpen(false)
    }
    const list = Object.values(selected)
    return (
        <div className="result">
            {list.length ?
                <div className="list">
                    <ListGroup>
                        {
                            list.map(item =>{
                                return <ListGroup.Item key={item.id} >
                                    <Item
                                        item={item}
                                        deleteItem={openModal}
                                    />
                                </ListGroup.Item>
                    
                            })
                        }
                    </ListGroup>
                </div>
                : <h3 className="sub-title">No tournament selected</h3>
            }
            <ConfirmModal open={open} close={closeModal} confirm={deleteSelected}/>
        </div>
    );
}

Tournament.propTypes = {
    deleteItem: PropTypes.func,
    selected: PropTypes.object,
};

const mapStateToProps = state => {
    return {
        selected:state.tournament.selected,
    };
};

const mapStateToAction = dispatch => {
    return {
        deleteItem: (id) => dispatch(deleteItem(id))
    };
};

export default connect(mapStateToProps, mapStateToAction)(withRouter(Tournament));