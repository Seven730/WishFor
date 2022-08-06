import Card from "../card/card";
import Modal from "../modal/modal";

import "./add-button.css";

function AddButton({ modalContent, title }) {
  return (
    <Card>
      <Modal content={modalContent} title={title}>
        <button className="add-button" type="button" title={title}>
          <span className="add-button__plus">+</span>
        </button>
      </Modal>
    </Card>
  );
}

export default AddButton;
