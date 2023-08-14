'use client'

import usePreviewModal from "@/hooks/use-preview-modal";

const PreviewModal = () => {
    const previewModal = usePreviewModal()
    const product = usePreviewModal(state => state)
    return (
        <div></div>
    )
}
export default PreviewModal;