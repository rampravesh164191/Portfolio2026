import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png"
function Projects() {
    return (
        <div id="projects" className="w-[700px] h-[500px] m-auto">
            <h1 className="text-[30px] text-center mt-7 mb-7">Projects</h1>
            <div className="w-full h-[50%] flex justify-evenly mt-[50px]">
                <div className="w-[50%] h-full">
                    <a href="https://constitution-coders-020.vercel.app/" target="blank" className="w-[200px]]">
                        <img className="w-[80%] mb-[10px]" src={project1} alt="project1 pic" />
                    </a>
                    <div className="flex">
                        <a className="ml-[10px]" target="_blank" href="https://github.com/rampravesh9991/Constitution-Coders_020">
                            <svg width="30" height="30" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>GitHub</title>
                                <path
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </a>
                        <a target="_blank" className="border border-black pt-[3px] pb-[3px] pl-[10px] pr-[10px] rounded-[5px] ml-[10px]" href="https://constitution-coders-020.vercel.app/">Visit</a>
                    </div>
                </div>
                <div className="w-[50%] h-full">
                    <a href="https://darling-klepon-897c85.netlify.app/food" target="blank" className="w-[600px]">
                        <img className="w-[80%] mb-[10px]" src={project2} alt="project2 pic" />
                    </a>
                    <div className="flex">
                        <a className="ml-[10px]" target="_blank" href="https://github.com/rampravesh164191/grocery_list_manager">
                            <svg width="30" height="30" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>GitHub</title>
                                <path
                                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </a>
                        <a target="_blank" className="border border-black pt-[3px] pb-[3px] pl-[10px] pr-[10px] rounded-[5px] ml-[10px]" href="https://constitution-coders-020.vercel.app/">Visit</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;