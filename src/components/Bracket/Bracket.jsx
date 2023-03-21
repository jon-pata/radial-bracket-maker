import React from "react"
import data from '../../assets/tournementData_end.json';
import { Round } from "../Round/Round";

export const Bracket = () => {

    const rounds = data.rounds;
    // const { color, logo } = round[0].teams[0];
    return (
        rounds.map(({ roundOf, teams }) => {
            return (
                <div>
                    <Round key={roundOf} roundOf={roundOf} teams={teams} />
                </div>
            )
        })
        // <Cell color={color} width="200px" src={logo} />
    )
};