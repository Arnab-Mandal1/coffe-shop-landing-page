import {Hero} from "../hero/Hero.tsx";
import {Menu} from "../menu/Menu.tsx";
import {Hours} from "../hours/Hours.tsx";
import {Location} from "../location/Location.tsx";

export function Main() {
    return (
        <>
            {/*A layout component providing consistent structure.*/}
            <section id="hero">
                <Hero/>
            </section>
            {/*Wraps the menu content for consistent padding and styling.*/}
            <section id="menu">
                <Menu/>
            </section>
            {/*A wrapper for the hours and status section.*/}
            <section id="hours">
                <Hours/>
            </section>
            {/*Wraps the location and map information*/}
            <section id="location">
                <Location/>
            </section>
        </>
    );
}