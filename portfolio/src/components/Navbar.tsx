// import cv from "../../public/Rampravesh_Resume2025.pdf"
import "../styles/Navbar.css"
function Navbar() {
    return (
        <div className="relative w-[1390px] m-auto bg-amber-400">
            <div id="box1" className="fixed top-0 z-10  bg-white w-[1390px] h-[60px] m-auto flex">
                <div className="w-[40%] h-full">dskfn</div>
                <div className="w-[60%] h-full flex justify-center items-center">
                    <a href="#home" className="hover:underline w-[20%] h-full flex justify-center items-center text-[22px]">Home</a>
                    <a href="#tech" className="hover:underline w-[20%] h-full flex justify-center items-center text-[22px]">Tech Stack</a>
                    <a href="#projects" className="hover:underline w-[20%] h-full flex justify-center items-center text-[22px]">Projects</a>
                    <a href="#contact" className="hover:underline w-[20%] h-full flex justify-center items-center text-[22px]">Contact</a>
                    {/* <button onClick={() => window.location.href = "http://localhost:3001/download"}>Download Resume</button> */}
                    <a href="/Rampravesh_Resume2025.pdf" download="" className="hover:underline w-[20%] h-full flex justify-center items-center text-[22px]">Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
