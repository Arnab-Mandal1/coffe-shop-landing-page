// This is the main container that assembles all the primary page sections.

import './App.css'
import {Header} from "../header/Header.tsx";
import {Main} from "../main/Main.tsx";
import {Footer} from "../footer/Footer.tsx";

function App() {
    return (
        <>
            <Header/>
            <Main/>
            <Footer/>
        </>)
}

export default App
