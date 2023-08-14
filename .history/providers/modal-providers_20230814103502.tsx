'use client'
import PreviewModal from "@/components/preview-modal";
import { useEffect, useState } from "react";
const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!)
    return (
        <>
            <PreviewModal />
        </>
    )

}
export default ModalProvider;