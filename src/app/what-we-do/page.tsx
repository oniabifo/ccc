import React from 'react';
import Header from '../components/header';

export default function WhatWeDo() {
    return (
        <main className='flex justify-center text-black'>
            <Header className="bg-primary" />

            <div
                id="home"
                className="relative overflow-hidden pt-[120px] md:pt-[130px] lg:pt-[160px]  w-full flex"
            >
                <div className="px-4 flex flex-col  w-full justify-center items-center">

                    <div className='max-w-6xl flex flex-col '>
                        <section className="mb-16 container">
                            <div className="flex flex-col md:flex-row items-center justify-between">

                                <div className="md:w-1/2 mb-8 md:mb-0">
                                    <h2 className="text-4xl font-bold text-primary mb-4">What We Do</h2>
                                    <p className="text-gray-600">
                                        Transform your innovative ideas into market leaders with our cloud-driven Artificial Intelligence solutions. Leverage our cutting-edge technology for unparalleled business growth and success.
                                    </p>
                                </div>

                                <div className="md:w-1/2  flex justify-end">
                                    <img src="./assets/images/blog/blog-01.jpg" alt="Team meeting" className="rounded-lg shadow-lg w-[400px] h-auto object-contain" />
                                </div>
                            </div>
                        </section>

                        <section className="bg-gray-100 p-8 container">
                            <h2 className="text-3xl font-bold text-primary mb-4">Our Business</h2>
                            <p className="text-gray-600">
                                Our business excels in Cloud and AI technologies, delivering solutions in application development, data mining, and advanced cloud security. We specialize in Natural Language Processing with a focus on Generative AI development for enhanced text and voice applications. Additionally, we offer AI-driven customer segmentation and targeting, along with bespoke recommendation engines, all supported by robust, scalable cloud infrastructure.
                            </p>
                        </section>

                        <section className="container">
                            <div className="flex w-full mb-16">
                                <img src="./assets/images/blog/blog-01.jpg" alt="Team meeting" className=" shadow-lg w-full h-auto object-contain" />
                            </div>
                        </section>

                        <section className="mb-16 container">
                            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Capabilities</h2>
                            <div className="flex flex-col md:flex-row items-center">
                                <div className="md:w-1/2 mb-8 md:mb-0">
                                    <h3 className="text-2xl font-bold text-primary mb-4">Cloud Consulting</h3>
                                    <p className="text-gray-600">
                                        Empower your business with our Cloud Consulting services. We specialize in tailored AWS solutions, ensuring robust security and compliance. Our experts provide end-to-end support, guiding you from migration to ongoing management. Additionally, we empower your team with best practices for efficient cloud utilization.
                                    </p>
                                </div>

                                <div className="md:w-1/2  flex justify-end">
                                    <img src="./assets/images/blog/blog-01.jpg" alt="Team meeting" className="rounded-lg shadow-lg w-[400px] h-auto object-contain" />
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Artificial Intelligence */}

                    <section className="mb-16 bg-primary/20 w-full flex justify-center py-20 px-5 md:px-0">
                        <div className='max-w-6xl'>
                            <div className="flex flex-col md:flex-row items-center gap-4">

                                <div className="md:w-1/2  flex justify-start">
                                    <img src="./assets/images/blog/blog-01.jpg" alt="Team meeting" className="rounded-lg shadow-lg w-[400px] h-auto object-contain" />
                                </div>

                                <div className="md:w-1/2 mb-8 md:mb-0">
                                    <h3 className="text-2xl font-bold text-primary mb-4">Artificial Intelligence</h3>
                                    <p className="text-gray-600">
                                        Transform your business with our AI consulting services in the era of digital transformation. We assess your readiness for AI integration, develop a comprehensive data strategy, and offer custom AI solutions tailored to your unique challenges. Our expert guidance ensures a smooth journey from planning to deployment, unlocking new opportunities for digital excellence.
                                    </p>
                                </div>


                            </div>
                        </div>

                    </section>



                    <div className='max-w-6xl flex flex-col '>
                        <section className="mb-16 container">
                            <div className="flex flex-col md:flex-row items-center justify-between">

                                <div className="md:w-1/2 mb-8 md:mb-0">
                                    <h2 className="text-4xl font-bold text-primary mb-4">Cloud Data Migrations</h2>
                                    <p className="text-gray-600">
                                        Our services provide a secure, customized pathway for your business to transition data to the cloud seamlessly. Tailored migration strategies ensure minimal disruption, while robust security measures and cutting-edge tools guarantee an efficient, reliable transfer. Post-migration, ongoing support optimizes your cloud data environment for performance and cost efficiency. Migrate confidently and harness the power of cloud computing with our expert guidance.
                                    </p>
                                </div>

                                <div className="md:w-1/2  flex justify-end">
                                    <img src="./assets/images/blog/blog-01.jpg" alt="Team meeting" className="rounded-lg shadow-lg w-[400px] h-auto object-contain" />
                                </div>
                            </div>
                        </section>
                    </div>


                    {/* Cloud Security */}

                    <section className="mb-16 bg-primary w-full flex justify-center py-20 px-5 md:px-0">
                        <div className='max-w-6xl'>
                            <div className="flex flex-col md:flex-row items-center gap-4">

                                <div className="md:w-1/2  flex justify-start">
                                    <img src="./assets/images/blog/blog-01.jpg" alt="Team meeting" className="rounded-lg shadow-lg w-[400px] h-auto object-contain" />
                                </div>

                                <div className="md:w-1/2 mb-8 md:mb-0">
                                    <h3 className="text-2xl font-bold text-white mb-4">Cloud Security</h3>
                                    <p className="text-white">
                                        In the dynamic digital landscape, our cloud security services ensure the protection of your cloud infrastructure, data, and applications. We conduct thorough security assessments, implement advanced solutions, and ensure regulatory compliance providing a secure foundation for your business's growth and innovation.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </section>


                    <div className='max-w-6xl flex flex-col '>
                        <section className="mb-16 container">
                            <div className="flex flex-col md:flex-row items-center justify-between">

                                <div className="md:w-1/2 mb-8 md:mb-0">
                                    <h2 className="text-4xl font-bold text-primary mb-4">Application Development</h2>
                                    <p className="text-gray-600">
                                        We specialize in personalized, cutting-edge solutions, leveraging modern technologies for scalability. Our user-centric design ensures an intuitive and engaging experience. With an agile process, rigorous quality assurance, and ongoing support, we turn your ideas into remarkable applications.
                                    </p>
                                </div>

                                <div className="md:w-1/2  flex justify-end">
                                    <img src="./assets/images/blog/blog-01.jpg" alt="Team meeting" className="rounded-lg shadow-lg w-[400px] h-auto object-contain" />
                                </div>
                            </div>
                        </section>
                    </div>


                    {/* DevSecOps */}

                    <section className="mb-16 bg-primary/10 w-full flex justify-center py-20 px-5 md:px-0">
                        <div className='max-w-6xl'>
                            <div className="flex flex-col md:flex-row items-center gap-4">

                                <div className="md:w-1/2  flex justify-start">
                                    <img src="./assets/images/blog/blog-01.jpg" alt="Team meeting" className="rounded-lg shadow-lg w-[400px] h-auto object-contain" />
                                </div>

                                <div className="md:w-1/2 mb-8 md:mb-0">
                                    <h3 className="text-2xl font-bold text-primary mb-4">DevSecOps</h3>
                                    <p className="text-gray-600">
                                        Elevate your development practices with our comprehensive DevSecOps solutions, seamlessly integrating robust security measures throughout your lifecycle. Our approach emphasizes collaboration and transparency, ensuring that your vision aligns with security needs at every stage, and our ongoing support guarantees a secure and extraordinary development journey.
                                    </p>
                                </div>


                            </div>
                        </div>

                    </section>

                    <footer className='flex py-5'>
                        <span>© 2023 Cloud Citadel Consulting. All rights reserved.</span>
                    </footer>

                </div>

            </div>


        </main>


    )
}