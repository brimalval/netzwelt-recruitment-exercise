import React, { useContext, useState } from "react";
// import ApiHelper from "../shared/APIHelper";
import MockApi from "../shared/tempBackend";
import UserContext from "../shared/UserContext";
import { Typography } from "@mui/material";

const Login: React.FC = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "",
    });

    const userContext = useContext(UserContext);
    let { setUser } = userContext;

    async function handleSubmit(e: any) {
        e.preventDefault();
        // Replace with ApiHelper
        const data = await MockApi.validateUser(
            credentials.username,
            credentials.password
        );
        if (data.status === "200") {
            alert("Login Successful");
            if (setUser) {
                setUser({
                    username: data.username,
                    displayName: data.displayName,
                    roles: data.roles,
                });
            }
        } else {
            alert("Login Failed");
        }
    }

    return (
        <div>
            <Typography variant="h3" className="p-4 font-bold">Log-in</Typography>
            <form action="#" onSubmit={handleSubmit}>
                <div className="content-center">
                    <div className="flex flex-col items-center space-y-5">
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            onChange={(e) =>
                                setCredentials({
                                    ...credentials,
                                    username: e.target.value,
                                })
                            }
                            className="px-2 py-1"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={(e) =>
                                setCredentials({
                                    ...credentials,
                                    password: e.target.value,
                                })
                            }
                            className="px-2 py-1"
                        />
                        <button
                            type="submit"
                            className="bg-purple-400 text-white px-2 py-1"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
