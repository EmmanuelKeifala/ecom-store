'use client'

import usePreviewModal from "@/hooks/use-preview-modal";
import Modal from "./ui/modal";

const PreviewModal = () => {
    const previewModal = usePreviewModal()
    const product = usePreviewModal(state => state.data)
    if (!product) {
        return null
    }
    return (
       <Modal open={previewModal.isOpen} onClose={prevo}>

       </Modal>
    )
}
export default PreviewModal;