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
        <Modal open={previewModal.isOpen} onClose={previewModal.onClose}>
            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                <div className=""></div>
            </div>
        </Modal>
    )
}
export default PreviewModal;