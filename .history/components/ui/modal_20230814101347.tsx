'use client'

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    open, onClose, children
}) => {
    return (
        <Transition show={open} appear as={Fragment}>
            <Dialog a></Dialog>
        </Transition>
    )
}
export default Modal;