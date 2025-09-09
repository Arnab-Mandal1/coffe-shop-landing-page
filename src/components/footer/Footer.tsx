import {SocialLinks} from '../socialLinks/SocialLinks';

export function Footer() {
    const contactInfo = {
        name: "The Local Cafe",
        phone: "(555) 123-4567",
        email: "hello@thelocalcafe.com",
    };

    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="container mx-auto px-6 md:px-8 text-center">
                <h3 className="text-2xl font-bold mb-2">{contactInfo.name}</h3>
                <p className="text-gray-400">{contactInfo.phone} • {contactInfo.email}</p>
                <div className="my-6">
                    <SocialLinks/>
                </div>
                <p className="text-gray-500 text-sm">© {new Date().getFullYear()} {contactInfo.name}. All Rights
                    Reserved.</p>
            </div>
        </footer>
    );
}