import React from 'react';

function Contact() {
    return (
        <div className="h-screen flex flex-col items-center justify-center bg-richgray">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-white mb-4">Send me a message!</h1>
                <p className="text-lg text-white">Got a question or proposal, or just want to say hello? Go ahead.</p>
            </div>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="name">
                            Enter your name
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder="Jane Doe" />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="email">
                            Enter your email address
                        </label>
                        <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" placeholder="jane.doe@example.com" />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="message">
                            Your message
                        </label>
                        <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" placeholder="Write your message here..."></textarea>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-white border border-blue-500 text-blue-500 font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline mt-4 inline-block"
                            style={{ minWidth: '150px', fontSize: '16px', borderRadius: '0' }}>
                        Send
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
