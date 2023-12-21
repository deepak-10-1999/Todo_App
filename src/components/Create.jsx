import { useContext } from "react";
import { UserContext } from "../utils/Context";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate = useNavigate();

    const {
        users,
        setusers,
        active,
        setActive,
        username,
        setusername,
        skill,
        setskill,
    } = useContext(UserContext);

    const SubmitHandler = (event) => {
        event.preventDefault();
        const user = { username, skill };

        setusers([...users, user]);
        setusername("");
        setskill("");
        navigate("/show");
    };

    const UpdateHandler = (e) => {
        e.preventDefault();
        const copyusers = [...users];
        copyusers[active] = { ...copyusers[active], username, skill };
        setusers(copyusers);
        setusername("");
        setskill("");
        setActive(null);
        navigate("/show");
    };

    return (
        <form className="w-full md:w-1/2 lg:w-1/2 mx-auto my-8 p-4 bg-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Create Tasks...</h3>
            <input
                className="w-full mb-3 p-2 border border-gray-400 rounded"
                onChange={(e) => setusername(e.target.value)}
                value={username}
                type="text"
                placeholder="Username"
            />
            <input
                className="w-full mb-3 p-2 border border-gray-400 rounded"
                onChange={(e) => setskill(e.target.value)}
                value={skill}
                type="text"
                placeholder="Skill"
            />

            {active === null ? (
                <button
                    onClick={SubmitHandler}
                    className="w-full bg-red-600 text-white border-none p-2 rounded"
                >
                    Submit
                </button>
            ) : (
                <button
                    onClick={UpdateHandler}
                    className="w-full bg-red-600 text-white border-none p-2 rounded"
                >
                    Update
                </button>
            )}
        </form>
    );
};

export default Create;
