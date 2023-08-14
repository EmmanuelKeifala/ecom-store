'use client'
import PreviewModal from "@/components/preview-modal";
import { useState } from "react";
const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)
    
    return (
        <>
            <PreviewModal />
        </>
    )

}
export default ModalProvider;