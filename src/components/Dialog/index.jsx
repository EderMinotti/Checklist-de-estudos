import { useEffect, useRef } from "react";
import "./dialog.style.css";
import { IconClose } from "../icons";


export function Dialog({ isOpen, onClose, children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
        abrirDialog()
    } else {
        fecharDialog()
    }
  }, [isOpen]);

  useEffect(()=> {
    const dialog = dialogRef.current
    dialog?.addEventListener('close', onClose)
    return () => {
      dialog?.removeEventListener('close', onClose) 
    }
  },[onClose])

  const abrirDialog = () => {
    dialogRef.current.showModal();
  };

  const fecharDialog = () => {
    dialogRef.current.close();
  };

  return (
    <>
      <dialog className="dialog" ref={dialogRef}>
        <button className="button-close" autoFocus onClick={onClose}><IconClose /></button>
        {children}
      </dialog>
    </>
  );
}
