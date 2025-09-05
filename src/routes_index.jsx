import React from "react";
import {
    Route,
    Routes,
  } from "react-router-dom";
import Home from "../pages/Home";
import Passes from "../pages/Passes";
import GetPasses from "../pages/Passes/Get-passes";
import Team from "../pages/Team";

export default function Navigation(){
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<Team />} />
                {*<Route path="/book-passes" element={<Passes />} />*}
                <Route path="/get-pass/:_id" element={<GetPasses />} />
            </Routes>
        </>
    )
}
