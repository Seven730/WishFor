import Card from "../card/card";
import Modal from "../modal/modal";

import "./add-button.css";

const pfx = "add-button";

function AddButton({ modalContent, title }) {
  return (
    <Card>
      <Modal content={modalContent} title={title}>
        <button className={pfx} type="button" title={title}>
          <span className={`${pfx}__plus`}>+</span>
        </button>
      </Modal>
    </Card>
  );
}

export default AddButton;
