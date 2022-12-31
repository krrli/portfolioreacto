import React, { ReactNode } from "react";
import styles from "./Modal.module.scss"
import {IProject, IProjectFields} from "../../@types/contentful";

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    //project: IProjectFields;

}

export default function Modal(props: ModalType) {
    return (
        <>
            {props.isOpen && (
                <div className={styles.modalOverlay} onClick={props.toggle}>
                    <div onClick={(e) => e.stopPropagation()} className={styles.modalBox}>
                        {props.children}
                    </div>
                </div>
            )}
        </>
    );
}