import React from "react"
import './Round.css'
import { Match } from "../Match/Match";

export const Round = ({ roundOf, teams, ourData, setOurData }) => {
    const matches = [];

    for (let i = 0; i < teams.length; i+=2) {
        let match = []
        match.push(teams[i]);
        match.push(teams[i + 1]);
        matches.push(match)
    }

    console.log(matches);

    return (
        matches.map((match) => {
            return (
                <>
                    <Match match={match} ourData={ourData} setOurData={setOurData}/>
                </>
            )
        })
    )
}