import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get in <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I’m always open to connect, collaborate, or chat about exciting web development ideas and opportunities!

                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Email</h4>
                                    <a
                                        className="text-muted-foreground hover:text-primary transition-colors text-left"
                                        target="_blank"
                                        href="mailto:mondalaranya925@gmail.com">

                                        mondalaranya925@gmail.com

                                    </a>
                                </div>

                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Phone</h4>
                                    <a
                                        className="text-muted-foreground hover:text-primary transition-colors text-left"
                                        target="_blank"
                                        href="tel:+918250934757">

                                        +91 8250934757

                                    </a>
                                </div>

                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Location</h4>
                                    <a
                                        className="text-muted-foreground hover:text-primary transition-colors text-left"
                                        target="_blank">

                                        Potheri, Chennai, Tamil Nadu, India

                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4">
                                Connect with Me
                            </h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/aranya-mondal-b2a40524b/" target="_blank" className="text-">
                                    <Linkedin/>
                                </a>
                                <a href="https://www.instagram.com/veil_side_1234/" target="_blank">
                                    <Instagram/>
                                </a>
                                <a href="https://github.com/VeilSide2004" target="_blank">
                                    <Github/>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Contact;