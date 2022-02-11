import React, { useState, useEffect } from "react";
import ApiHelper from "../shared/APIHelper";
import { Territory } from "../shared/types";

const Home: React.FC = () => {
    const [territories, setTerritories] = useState<Territory[]>([]);

    const getTerritories = async () => {
        const data = await ApiHelper.getTerritories();
        setTerritories(data.data);
    };

    useEffect(() => {
        let mounted = true;
        if (mounted) getTerritories();
        alert("Territories loaded");
        console.log(territories);
        return () => {
            mounted = false;
        };
    }, []);

    return (
        <div>
            <h1 className="p-6">Home</h1>
            <ul></ul>
        </div>
    );
};

export default Home;
