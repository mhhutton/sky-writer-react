import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function MsgModal({msgContainer, setMsgContainer}) {
  const [show, setShow] = useState(false);
  const [modalMsg, setModalMsg] = useState('');
  const [modalMsgCharCount, setModalMsgCharCount] = useState(0);

  const handleClose = () => setShow(false);
  const handleSaveMsg= () => {
    setShow(false);
    setMsgContainer(modalMsg);
    setModalMsgCharCount(0);
  }
  const handleShow = () => {
    setShow(true);
    setModalMsgCharCount(0);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create New Message
      </Button>

      <Modal className='modal-window' show={show} onHide={handleClose}>
        <Modal.Body className='modal-body'>
          <Form.Control
            className='modal-msg-window'
            placeholder="Enter New Message"
            maxLength='100'
            onChange={(event) => {
              setModalMsg(event.target.value)
              setModalMsgCharCount(event.target.value.length)
            }}
          />
          <Form.Text>
            Max char: 100
            Current char amount: {modalMsgCharCount}
          </Form.Text>
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveMsg}>
            Save Message
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MsgModal;
