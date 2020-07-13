import React, {useState, useEffect} from "react";
//Bootstrap
import { Button,Modal } from 'react-bootstrap';
import PropTypes from "prop-types";

function ConfirmModal(props) {
    const {open, close, confirm} = props
    const [show, setShow] = useState(open);
    
    useEffect(() => {
        setShow(!!open)
    }, [open])
    
    const handleClose = () => {
        setShow(false)
        close()
    }
    const submit = () => {
        confirm(open)
        setShow(false)
        close()
    }
    
    return (
            <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Remove Tournament</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to remove this Tournament from your list</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={submit}>
                        Remove
                    </Button>
                </Modal.Footer>
            </Modal>
                </>
    );
}
ConfirmModal.propTypes = {
    deleteItem: PropTypes.func,
    selected: PropTypes.object,
};
export default ConfirmModal;