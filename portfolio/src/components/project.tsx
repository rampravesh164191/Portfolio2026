function Project() {
    let dataArr = [
        { 
            img: "../assets/project1.png", 
            git: "https://github.com/rampravesh9991/Constitution-Coders_020", 
            visit: "https://constitution-coders-020.vercel.app/" 
        },
        {
            img: "../assets/project2.png", 
            git: "https://github.com/rampravesh164191/grocery_list_manager", 
            visit: "https://darling-klepon-897c85.netlify.app/food"
        }
    ]
    return (
        <div className="border border-black w-[1390px] h-[400px] m-auto mt-3">
            <h1 className="text-[30px] text-center mb-5">Projects</h1>
            dataArr.foreach((item,index)=>(
                <div className="border border-black w-[95%] h-[300px] m-auto rounded-2xl flex items-center">
                <img className="border border-black w-[300px] h-[80%] ml-4" src="" alt="" />
                <div className="border border-black h-[80%] w-[72%] ml-4"></div>
            </div>
            ))
        </div>
    )
}
export default Project;