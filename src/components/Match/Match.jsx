import React from "react";
import { Cell } from "../Cell/Cell";
import './Match.css'
export const Match = ({ match, ourData, setOurData }) => {

    const team1 = match[0];
    const team2 = match[1];

    return (
        <div className="match">
            <Cell color={team1.color} src={team1.logo} ourData={ourData} setOurData={setOurData}/>
            { team2 && <Cell color={team2.color} src={team2.logo} ourData={ourData} setOurData={setOurData}/> }
        </div>
    )
};