import React, { useContext } from "react";
import { UserContext } from "../utils/Context";
import { Outlet, useNavigate } from "react-router-dom";

const Show = () => {
    const navigate = useNavigate();
    const { active, users, setusers, setActive, setusername, setskill } =
        useContext(UserContext);

    const ActiveHandler = (i) => {
        setActive(i);
        setusername(users[i].username);
        setskill(users[i].skill);
        navigate("/create");
    };

    const DeleteHandler = (i) => {
        const copyusers = [...users];
        copyusers.splice(i, 1);
        setusers(copyusers);
    };

    const InfoHandler = (i) => {
        navigate("/show/" + i);
    };

    return (
        <div className="w-full md:w-1/2 lg:w-1/2 mx-auto my-8 p-4 bg-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Pending Tasks...</h3>
            {users.map((e, i) => (
                <div
                    key={i}
                    className="flex justify-between items-center bg-blue-200 mb-2 p-2 rounded"
                >
                    <span className="text-gray-800">{e.username}</span>
                    {active === null && (
                        <span className="space-x-2">
                            <span
                                onClick={() => ActiveHandler(i)}
                                className="cursor-pointer"
                            >
                                ✏️
                            </span>
                            <span
                                onClick={() => DeleteHandler(i)}
                                className="cursor-pointer"
                            >
                                ❌
                            </span>
                            <span
                                onClick={() => InfoHandler(i)}
                                className="cursor-pointer"
                            >
                                ℹ️
                            </span>
                        </span>
                    )}
                </div>
            ))}
            <hr className="my-4" />
            <Outlet />
        </div>
    );
};

export default Show;
