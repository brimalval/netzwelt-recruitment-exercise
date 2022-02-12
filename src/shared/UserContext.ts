import { createContext } from "react";

interface UserProps {
    username: string | null;
    displayName: string | null;
    roles: string[];
}

interface UserContextProps {
    user: UserProps | null;
    setUser: (user: UserProps) => void;
}

export default createContext<UserContextProps>({
    user: null,
    setUser: () => {},
});
