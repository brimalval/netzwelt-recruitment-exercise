import { List } from "@mui/material";
import React, { useState, useEffect } from "react";
import TerritoryItem from "../components/TerritoryItem";
import MockApi from "../shared/tempBackend";
import { Territory } from "../shared/types";

const Home: React.FC = () => {
    const [territories, setTerritories] = useState<Territory[]>([]);

    const getTerritories = async () => {
        // Replace MockServer with ApiHelper
        const data = await MockApi.getTerritories();
        setTerritories(data.data);
    };

    useEffect(() => {
        let mounted = true;
        if (mounted && !territories.length) getTerritories();
        return () => {
            mounted = false;
        };
    }, []);

    const baseTerritories = territories.filter(
        (territory) => territory.parent === null
    );

    return (
        <div>
            <h1 className="p-6">Home</h1>
            <div className="flex justify-center max-h-full w-full">
                <div className="w-3/4">
                    <List className="bg-gray-200">
                        {baseTerritories.map((territory) => (
                            <TerritoryItem
                                key={territory.id}
                                id={territory.id}
                                territories={territories}
                                level={0}
                            />
                        ))}
                    </List>
                </div>
            </div>
        </div>
    );
};

export default Home;
