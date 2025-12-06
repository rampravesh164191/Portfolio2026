import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png"
function Projects(){
    return (
        <div className="border border-black w-[1380px] h-[600px]">
            <h1 className="text-[30px] text-center mt-7 mb-7">Projects</h1>
            <div className="border border-black w-full flex justify-evenly items-center">
                <a href="https://constitution-coders-020.vercel.app/" target="blank" className="border border-black w-[600px]">
                    <img src={project1} alt="project1 pic" />
                </a>
                <a href="https://darling-klepon-897c85.netlify.app/food" target="blank" className="border border-black w-[600px]">
                    <img src={project2} alt="project2 pic" />
                </a>
            </div>
        </div>
    )
}

export default Projects;