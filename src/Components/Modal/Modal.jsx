import { Fragment } from "react";
import ReactDom from "react-dom";
import classes from "./Modal.module.css";
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.box}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal; 