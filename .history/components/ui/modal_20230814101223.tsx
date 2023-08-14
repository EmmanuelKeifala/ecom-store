'use client'

interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    open, onClose, children
}) => {
    return (
        <div></div>
    )
}
export default Modal;