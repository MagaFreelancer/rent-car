
const CarInfoItem = ({ properties, text }: any) => {
    return (
        <li className=" text-sm flex justify-between py-1">
            <span className=" text-gray-500">{properties}</span>
            <span className="">{text}</span>
        </li>
    )
}

export default CarInfoItem