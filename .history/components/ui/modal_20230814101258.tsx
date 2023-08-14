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
        <Transition>
            
        </Transition>
    )
}
export default Modal;