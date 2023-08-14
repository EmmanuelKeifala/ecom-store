'use client'

import { Transition } from "@headlessui/react";
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
            <Dialo
        </Transition>
    )
}
export default Modal;