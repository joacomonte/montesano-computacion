import React from 'react';
import styles from './CustomDialog.module.css'

type CustomDialogProps = {
    onClose: () => void;
    content: JSX.Element;
    dialogRef: React.RefObject<HTMLDialogElement>;
}

const CustomDialog = ({ onClose, content, dialogRef }: CustomDialogProps ) => {
    return (
        <dialog className={styles.dialog} ref={dialogRef}>
            <div className={styles.dialogContainer}>
                <button className={styles.closeDialogButton} onClick={onClose}>
                    X
                </button>
                <div className={styles.dialogContent}>
                    {content}
                </div>
            </div>
        </dialog>
    );
};

export default CustomDialog;