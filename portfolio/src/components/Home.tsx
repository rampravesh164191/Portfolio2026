import mypic from "../assets/1me2.png";
function Home(){
    return (
        <div className="border border-black max-w-[1380px] h-[550px] m-auto flex mt-[60px]">
            <div className="border border-black w-[40%] h-full flex justify-center items-center">
                <img src={mypic} alt="my photo" className="rounded-[50%] border border-black h-[70%]" />
            </div>
            <div className="border border-black w-[60%] h-full flex items-center">
                <div className="border border-black h-[50%] w-[80%] p-2">
                    <h1 className="text-[50px]">Full Stack Developer (MERN)</h1>
                    <h1>I'm Ram Pravesh Sharma.</h1>
                    <h1>I develop modern, scalable, and user-friendly web applications.</h1>
                </div>
            </div>
            <div className="absolute top-[128   px] right-[25px] w-px h-32 bg-black"></div>
            <div className="absolute top-[300px] right-[-20px] rotate-270">राम प्रवेश शर्मा</div>
            <div className="absolute top-[370px] right-[25px] w-px h-32 bg-black"></div>

        </div>
    )
}
export default Home;