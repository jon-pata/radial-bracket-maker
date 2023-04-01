import React from "react"
import './Bracket.css'
import { Round } from "../Round/Round";

export const Bracket = ({data, setData, roundCount}) => {

    console.log(`data: ${data}`);
    const rounds = data.rounds;
    // const { color, logo } = round[0].teams[0];
    return (
        rounds.map(({ roundOf, teams }) => {
            return (
                <div className="round">
                    <Round key={roundOf} roundOf={roundOf} teams={teams} data={data} setData={setData}/>
                </div>
            )
        })
        // <Cell color={color} width="200px" src={logo} />
    )
};