// The main navigation bar at the top of the page.
import {Logo} from "../logo/Logo.tsx";
import {Navigation} from "../navigation/Navigation.tsx";

export function Header() {
    return (
        <>
            <Logo/>
            <Navigation/>
        </>
    );
}