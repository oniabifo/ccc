'use client';

import React, { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

interface FormData {
    fullName: string;
    email: string;
    phone: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
    const { executeRecaptcha } = useGoogleReCaptcha();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!executeRecaptcha) {
            console.error('reCAPTCHA has not been loaded');
            return;
        }

        setIsSubmitting(true);
        try {
            const token = await executeRecaptcha('submit_form');

            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ ...formData, recaptchaToken: token }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ fullName: '', email: '', phone: '', message: '' });
            } else {
                setSubmitStatus('error');
                console.error('Form submission failed:', data.message);
            }
        } catch (error) {
            console.error('Error submitting form:', error);

            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-[22px]">
                <label
                    htmlFor="fullName"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                    Full Name*
                </label>
                <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
                    required
                />
            </div>
            <div className="mb-[22px]">
                <label
                    htmlFor="email"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                    Email*
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@yourmail.com"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
                    required
                />
            </div>
            <div className="mb-[22px]">
                <label
                    htmlFor="phone"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                    Phone*
                </label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+885 1254 5211 552"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
                    required
                />
            </div>
            <div className="mb-[30px]">
                <label
                    htmlFor="message"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                    Message*
                </label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Type your message here"
                    className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"
                    required
                ></textarea>
            </div>
            <div className="mb-0">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center rounded-md !bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out disabled:opacity-50"
                >
                    {isSubmitting ? 'Sending...' : 'Submit'}
                </button>
            </div>
            {submitStatus === 'success' && (
                <p className="mt-4 text-green-600">Your message has been sent successfully!</p>
            )}
            {submitStatus === 'error' && (
                <p className="mt-4 text-red-600">There was an error sending your message. Please try again.</p>
            )}
        </form>
    );
};

export default ContactForm;