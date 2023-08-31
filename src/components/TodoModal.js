import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TodoModal({showModal, handleClose, editArray, setEditArray, handleSave}) {
  

  return (
    <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
                <Form.Group className="mb-3" controlId="todo">
                <Form.Label>Todoss</Form.Label>
                <Form.Control value={editArray ? editArray.name : ''} onChange={(e) => setEditArray({...editArray, name: e.target.value})} type="todo" placeholder="Enter Todo list.." />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  );
}

export default TodoModal;