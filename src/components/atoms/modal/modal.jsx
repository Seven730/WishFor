import React, { useState, useId } from "react";
import classNames from "classnames";

import "./modal.css";

import { Portal } from "../../../helpers/helpers";

const pfx = "modal";

function Modal({ children, content, title }) {
  const [active, setActive] = useState(false);
  const [id] = useState(useId());

  const modalClasses = classNames(pfx, {
    [`${pfx}--active`]: active,
  });

  const showModal = () => {
    setActive(true);
  };

  const hideModal = () => {
    setActive(false);
  };

  return (
    <>
      {React.cloneElement(children, {
        onClick: (event) => {
          if (children.props.onClick) children.props.onClick();
          showModal();
        },
      })}
      <Portal>
        <div className={modalClasses} id={id}>
          <div className={`${pfx}__content`}>
            <header className={`${pfx}__header`}>
              {title && <div className={`${pfx}__header`}>{title}</div>}
              <button className={`${pfx}__close`} onClick={hideModal}>
                &times;
              </button>
            </header>
            {content}
          </div>
        </div>
      </Portal>
    </>
  );
}

export default Modal;
