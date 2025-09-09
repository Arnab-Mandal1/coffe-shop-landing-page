import {Button} from '../button/Button';
import {Map} from '../map/Map';

export function Location() {
    const address = "123 Coffee Bean Lane, Brewville, CA 90210";

    return (
        <section id="location" className="py-16 md:py-24 bg-amber-50">
            <div className="container mx-auto px-6 md:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Find Us</h2>
                        <p className="text-xl text-gray-700 mb-6">{address}</p>
                        <Button href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                                variant="secondary">
                            Get Directions
                        </Button>
                    </div>
                    <Map/>
                </div>
            </div>
        </section>
    );
}