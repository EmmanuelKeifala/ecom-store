import { Billboard as BillboardTypes } from "@/types";

interface BillboardProps {
    data: BillboardTypes;
}

const Billboard: React.FC<BillboardProps> = ({
    data
}) => {
    return (
        <div className="p-4 sm:p-6">

        </div>
    )
}

export default Billboard;