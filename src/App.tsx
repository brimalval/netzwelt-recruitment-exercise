import {  useEffect, useState } from "react";
import {
    BrowserRouter,
    Navigate,
    Outlet,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import Login from "./pages/Login";
import UserContext from "./shared/UserContext";
import Cookies from "js-cookie";
import { Button, Typography } from "@mui/material";

const ProtectedRoutes = () => {
    const user = JSON.parse(Cookies.get("user") || "{}");
    return Object.entries(user).length !== 0 ? (
        <Outlet />
    ) : (
        <Navigate to="/account/login" />
    );
};

const ProtectedLogin = () => {
    const user = JSON.parse(Cookies.get("user") || "{}");

    return Object.entries(user).length !== 0 ? <Navigate to="/" /> : <Outlet />;
};

const App: React.FC = () => {
    const [user, setUser] = useState<any | null>();

    useEffect(() => {
        const cookie = Cookies.get("user");
        if (cookie) {
            setUser(JSON.parse(cookie));
        }
    }, []);

    const handleLogout = () => {
        Cookies.remove("user");
        setUser(null);
    };

    return (
        <div className="app">
            <BrowserRouter>
                {/* Temporary nav */}
                {/* <nav className="">
                    <div className="px-8 py-4 bg-purple-400">
                        <div className="flex text-white space-x-6">
                            <Link to="/">Home</Link>
                            <Link to="/account/login">Login</Link>
                        </div>
                        <button onClick={handleLogout}>Log-out</button>
                    </div>
                </nav> */}
                <nav>
                    <div className="px-8 py-4 bg-purple-400">
                        <div className="flex text-white space-x-6 items-center">
                            {user ? (
                                <React.Fragment>
                                    <Typography>
                                        Welcome, {user.displayName}
                                    </Typography>
                                    <Button
                                        onClick={handleLogout}
                                        variant="outlined"
                                        color="secondary"
                                    >
                                        Log-out
                                    </Button>
                                </React.Fragment>
                            ) : null}
                        </div>
                    </div>
                </nav>
                <div className="max-h-100">
                    <UserContext.Provider value={{ user, setUser }}>
                        <Routes>
                            <Route element={<ProtectedRoutes />}>
                                <Route path="/" element={<Home />} />
                            </Route>
                            <Route element={<ProtectedLogin />}>
                                <Route
                                    path="/account/login"
                                    element={<Login />}
                                />
                            </Route>
                        </Routes>
                    </UserContext.Provider>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
