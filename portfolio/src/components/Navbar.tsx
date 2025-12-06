function Navbar() {
    return (
        <div className="fixed top-0 z-10 border border-black bg-white max-w-[1390px] w-full h-[60px] text-[22px] m-auto flex">
            <div className="border border-green w-[40%] h-full"></div>
            <div className="border border-green w-[60%] h-full flex justify-center items-center">
                <a href="#home" className="border border-black w-[20%] h-full flex justify-center items-center">Home</a>
                <a href="#tech" className="border border-black w-[20%] h-full flex justify-center items-center">Tech Stack</a>
                <a href="#projects" className="border border-black w-[20%] h-full flex justify-center items-center">Projects</a>
                <a href="#contact" className="border border-black w-[20%] h-full flex justify-center items-center">Contact</a>
                {/* <button onClick={() => window.location.href = "http://localhost:3001/download"}>Download Resume</button> */}
                <a href="/resume.pdf" download>Download</a>
            </div>
        </div>
    )
}

export default Navbar;
