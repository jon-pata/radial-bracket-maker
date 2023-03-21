import React from "react";
import { Cell } from "../Cell/Cell";
export const Match = ({ match }) => {

    const team1 = match[0];
    const team2 = match[1];

    return (
        <div>
            <Cell color={team1.color} src={team1.logo}/>
            { team2 && <Cell color={team2.color} src={team2.logo}/> }
        </div>
    )
};