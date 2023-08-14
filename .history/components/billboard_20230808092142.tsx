import { Billboard as BillboardTypes } from "@/types";

interface BillboardProps {
    data: BillboardTypes;
}

const Billboard: React.FC<BillboardProps> = ({
    data
}) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
            <div className="rounded-xl relative " style={{ backgroundImage: `url(${data?.imageUrl})` }}></div>
        </div>
    )
}

export default Billboard;