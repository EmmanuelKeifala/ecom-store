'use client'

import { Transition } from "@headlessui/react";

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    open, onClose, children
}) => {
    return (
        <Transition show={open} >

        </Transition>
    )
}
export default Modal;