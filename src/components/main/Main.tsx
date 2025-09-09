import {Hero} from '../hero/Hero';
import {Menu} from '../menu/Menu';
import {Hours} from '../hours/Hours';
import {Location} from '../location/Location';

export function Main() {
    return (
        <main>
            <Hero/>
            <Menu/>
            <Hours/>
            <Location/>
        </main>
    );
}