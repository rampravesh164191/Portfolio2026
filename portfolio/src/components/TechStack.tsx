import { cssSVG, expressSVG, firebaseSVG, gitSVG, htmlSVG, javascriptSVG, mongodbSVG, mongooseSVG, nodejsSVG, postmanSVG, reactSVG, redisSVG, reduxSVG, tailwindSVG, typeScriptSVG } from "./svgData";


function TechStack() {
    return (
        <div id="tech" className="max-w-[1380px] max-h-[1000px] m-auto mt-7">
            <div>
                <h1 className="text-[30px] text-center">Frontend</h1>
                <div className="w-full h-full flex flex-wrap justify-center items-center gap-10 p-7">
                    <div className="w-[100px] h-[100px]">
                        {/* html  */}
                        <svg
                            fill="currentColor"
                            className="text-[#E34F26] bg-white"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>HTML5</title>
                            <path d={htmlSVG} />
                        </svg>
                    </div>
                    <div className="w-[100px] h-[100px]">
                        {/* CSS  */}
                        <svg
                            fill="currentColor"
                            className="text-[#663399] bg-white"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>CSS</title>
                            <path d={cssSVG} />
                        </svg>
                    </div>
                    <div className="w-[100px] h-[100px]">
                        {/* JavaScript  */}
                        <svg
                            fill="currentColor"
                            className="text-[#F7DF1E] bg-white"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>JavaScript</title>
                            <path d={javascriptSVG} />
                        </svg>
                    </div>
                    <div className="w-[100px] h-[100px]">
                        {/* REACT  */}
                        <svg
                            fill="currentColor"
                            className="text-[#61DAFB] bg-white"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>React</title>
                            <path d={reactSVG} />
                        </svg>
                    </div>
                    <div className="w-[100px] h-[100px]">
                        {/* REDUX  */}
                        <svg
                            fill="currentColor"
                            className="text-[#764ABC] bg-white"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Redux</title>
                            <path d={reduxSVG} />
                        </svg>
                    </div>
                    <div className="w-[100px] h-[100px]">
                        {/* Typescript  */}
                        <svg
                            fill="currentColor"
                            className="text-[#3178C6] bg-white"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>TypeScript</title>
                            <path d={typeScriptSVG} />
                        </svg>
                    </div>
                    <div className="w-[100px] h-[100px]">
                        {/* tailwind  */}
                        <svg
                            fill="currentColor"
                            className="text-[#06B6D4] bg-white"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Tailwind CSS</title>
                            <path d={tailwindSVG} />
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-[30px] text-center">Backend / Services</h1>
                <div className="w-full h-full flex flex-wrap justify-center items-center gap-10 p-7">
                    <div className="w-[100px] h-[100px]">
                        {/* node.js  */}
                        <svg
                            fill="currentColor"
                            className="text-[#5FA04E] bg-white"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Node.js</title>
                            <path d={nodejsSVG} />
                        </svg>
                    </div>
                    <div className="w-[100px] h-[100px]">
                        {/* express.js  */}
                        <svg
                            fill="currentColor"
                            className="text-[#000000] bg-white"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Express</title>
                            <path d={expressSVG} />
                        </svg>
                    </div>
                    <div className="w-[100px] h-[100px]">
                        {/* mongoDB  */}
                        <svg
                            fill="currentColor"
                            className="text-[#47A248] bg-white"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>MongoDB</title>
                            <path d={mongodbSVG} />
                        </svg>
                    </div>
                    <div className="w-[100px] h-[100px]">
                        {/* mongoose  */}
                        <svg
                            fill="currentColor"
                            className="text-[#880000] bg-white"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Mongoose</title>
                            <path d={mongooseSVG} />
                        </svg>
                    </div>
                    <div className="w-[100px] h-[100px]">
                        {/* redis  */}
                        <svg
                            fill="currentColor"
                            className="text-[#FF4438] bg-white"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Redis</title>
                            <path d={redisSVG} />
                        </svg>
                    </div>
                    <div className="w-[100px] h-[100px]">
                        {/* firebase  */}
                        <svg
                            fill="currentColor"
                            className="text-[#DD2C00] bg-white"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Firebase</title>
                            <path d={firebaseSVG} />
                        </svg>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="text-[30px] text-center">Tools</h1>
                <div className="w-full h-full flex flex-wrap justify-center items-center gap-10 p-7">
                    <div className="w-[100px] h-[100px]">
                        {/* postman  */}
                        <svg
                            fill="currentColor"
                            className="text-[#FF6C37] bg-white"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Postman</title>
                            <path d={postmanSVG} />
                        </svg>
                    </div>

                    <div className="w-[100px] h-[100px]">
                        {/* git  */}
                        <svg
                            fill="currentColor"
                            className="text-[#F05032] bg-white"
                            role="img"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Git</title>
                            <path d={gitSVG} />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechStack;
