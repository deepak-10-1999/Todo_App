import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../utils/Context";

const Info = () => {
    const { id } = useParams();
    const { users } = useContext(UserContext);
    const user = users[id];

    return (
        <div className="flex flex-col items-center justify-center h-[300px] bg-gray-200">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold text-gray-800 mb-4">
                {user.username}
            </h1>
            <h2 className="text-lg md:text-xl lg:text-2xl text-center font-bold text-gray-600 mb-6">
                {user.skill}
            </h2>
            <Link
                to="/show"
                className="text-blue-500 text-[20px] rounded p-[10px] hover:border border-blue-500 focus:outline-none"
            >
                Back
            </Link>
        </div>
    );
};

export default Info;