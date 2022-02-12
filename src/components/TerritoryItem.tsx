import React from "react";
import { Territory } from "../shared/types";
import { List, ListItemButton, ListItemText, Collapse } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface Props {
    territories: Territory[];
    id: string;
    level?: number;
}

const TerritoryItem: React.FC<Props> = (props) => {
    const { territories, id } = props;
    const level = props.level || 0;
    const territory = territories.find((t) => t.id === id);
    const subTerritories = territories.filter((t) => t.parent === id);
    const [open, setOpen] = React.useState(true);
    const bg = (level & 1) === 0 ? "bg-gray-200" : "bg-gray-300";

    const handleClick = () => setOpen(!open);

    return territory ? (
        <React.Fragment>
            <ListItemButton onClick={handleClick} sx={{ pl: level * 4 }} className={bg}>
               {subTerritories.length ? (
                    open ? (
                        <ExpandLess />
                    ) : (
                        <ExpandMore />
                    )
                ) : null}
                <ListItemText primary={territory.name} />
            </ListItemButton>
            {subTerritories.length ? (
                <Collapse in={open} className={bg}>
                    <List>
                        {subTerritories.map((t) => (
                            <TerritoryItem
                                key={t.id}
                                id={t.id}
                                territories={territories}
                                level={level + 1}
                            />
                        ))}
                    </List>
                </Collapse>
            ) : null}
        </React.Fragment>
    ) : (
        <React.Fragment />
    );
};

export default TerritoryItem;
