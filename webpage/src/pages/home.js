import { Route, Router } from "react-router-dom";
import Dashboard from "./Dashboard";
import Header from "./header";

export default function Home() {
    return (
        <>
            <div>
                <Header/>
                <Dashboard/>
            </div>
        </>
    )
}