
const Contact = () => {
    return (
        <section name="contact" className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 p-4 text-gray-100">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8 pt-[5rem]">
                    <h2 className="text-4xl font-bold border-b-4 border-gray-500 inline pb-2">Contact</h2>
                    <p className="py-1 mt-16 text-gray-300">Fill and submit the form below to get in touch with me</p>
                </div>
                <div>
                    <form action="https://formspree.io/f/xpznvvka"
                        method="POST"
                        className="flex flex-col max-w-lg w-full gap-y-4">
                        <input type="text" name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-gray-100 focus:outline-none border-gray-600"
                            required />
                        <input type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="p-2 bg-transparent border-2 rounded-md border-gray-600 text-gray-100 focus:outline-none"
                            required />
                        <textarea name="message"
                            placeholder="Enter your message"
                            rows="10"
                            className="p-2 bg-transparent border-2 border-gray-600 rounded-md text-gray-100 focus:outline-none"
                            required></textarea>
                        <button
                            type="submit"
                            className="text-gray-100 bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's talk</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact