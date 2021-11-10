import React from "react";
import ReactDOM from "react-dom";

import Button from "components/Button/Button";
import { ModalBg, ModalWrapper, ModalClose } from "./style";

const Modal = ({ onClose, live, repo }) => {
  return (
    <ModalBg>
      <ModalWrapper>
        <ModalClose onClick={onClose}>
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="times-circle"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
            ></path>
          </svg>
        </ModalClose>
        <Button text="Live" linkTo={live} />
        <Button text="Repo" linkTo={repo} />
      </ModalWrapper>
    </ModalBg>
  );
};

export default function ModalPortal({ onClose, live, repo }) {
  return ReactDOM.createPortal(
    <Modal live={live} repo={repo} onClose={onClose}></Modal>,
    document.getElementById("portal")
  );
}
