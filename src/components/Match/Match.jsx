import React from "react";
import { Cell } from "../Cell/Cell";
import './Match.css'
export const Match = ({ match, data, setData }) => {

    const team1 = match[0];
    const team2 = match[1];

    return (
        <div className="match">
            <Cell color={team1.color} src={team1.logo} data={data} setData={setData}/>
            { team2 && <Cell color={team2.color} src={team2.logo} data={data} setData={setData}/> }
        </div>
    )
};