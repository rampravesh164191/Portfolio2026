import mypic from "../assets/1me2.png";
function Home(){
    return (
        <div id="home" className="max-w-[1380px] h-[550px] m-auto flex mt-[60px]">
            <div className="w-[40%] h-full flex justify-center items-center">
                <img src={mypic} alt="my photo" className="rounded-[50%] h-[70%]" />
            </div>
            <div className="w-[60%] h-full flex items-center">
                <div className="h-[50%] w-[80%] p-2">
                    <h1 className="text-[50px]">Full Stack Developer (MERN)</h1>
                    <h1>I'm Ram Pravesh Sharma.</h1>
                    <h1>I develop modern, scalable, and user-friendly web applications.</h1>
                </div>
            </div>
            <div className="absolute top-[128px] right-[25px] w-px h-32 bg-black"></div>
            <div className="absolute top-[300px] right-[-20px] rotate-270">राम प्रवेश शर्मा</div>
            <div className="absolute top-[370px] right-[25px] w-px h-32 bg-black"></div>

        </div>
    )
}
export default Home;