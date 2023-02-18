import { BsSun, BsCloudy } from "react-icons/bs";
import { IoRainyOutline } from "react-icons/io5";
import "./LocationCard.css";
export default function LocationCard({
    variant = "sunny",
}: {
    variant: "sunny" | "rainy" | "cloudy";
}) {
    const variants = {
        sunny: {
            background: "sunny",
            icon: () => <BsSun size="50" color="orange" />,
        },
        rainy: {
            background: "rainy",
            icon: () => <IoRainyOutline size="50" color="blue" />,
        },
        cloudy: {
            background: "cloudy",
            icon: () => <BsCloudy size="50" color="blue" />,
        },
    };

    return (
        <div
            class={`w-1/2 mx-auto rounded-lg shadow-lg flex justify-between p-5 items-center ${variants[variant].background}`}
        >
            <div className="text-left">
                <h2 className="font-normal text-4xl">22°</h2>
                <h4 className="text-gray-500">Kolkata, India</h4>
            </div>
            {variants[variant].icon()}
        </div>
    );
}
