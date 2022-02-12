import { List, Typography } from "@mui/material";
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
        <div className="px-6">
            <Typography variant="h3" className="p-4 font-bold">
                Territories
            </Typography>
            <Typography variant="h6" className="p-4">
                Here is the list of territories
           </Typography>
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
