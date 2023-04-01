import React from "react"
import './Round.css'
import { Match } from "../Match/Match";

export const Round = ({ roundOf, teams, data, setData }) => {
    const matches = [];

    for (let i = 0; i < teams.length; i+=2) {
        let match = []
        match.push(teams[i]);
        match.push(teams[i + 1]);
        matches.push(match)
    }

    const calculateMatchWidth = () => {
        let screenW = document.querySelector("#root").offsetWidth;
        let w = screenW / teams.length;
        return `${w}px`
    }

    console.log(matches);

    return (
        matches.map((match) => {
            return (
                <>
                    <Match match={match} data={data} setData={setData} width={calculateMatchWidth()}/>
                </>
            )
        })
    )
}