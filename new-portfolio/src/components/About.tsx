import { motion } from "framer-motion"


function About({ x, y }: { x: number, y: number }): JSX.Element {


    return (
        <>
            <div style={{ top: y, left: x }} className={`h-[100px] w-[100px] -z-10 fixed -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-cyan-400`}></div>
            <div className='h-screen fixed bg-[linear-gradient(20deg,rgba(0,0,0,1),rgba(19,8,106,1),rgba(0,0,0,1))] w-screen -z-50'>
            </div>
            <div className={`max-sm:p-[50px] px-[150px] py-[72px] w-full flex flex-col vh-screen justify-center items-center`}>
                <motion.div className={"font-lato text-6xl font-semibold py-10 text-cyan-400"}>
                    I'm Hansoo.
                </motion.div>
                <div className={"flex flex-row max-sm:space-x-0 space-x-8 space-y-7 justify-evenly items-center flex-wrap mt-5"}>
                    <motion.img className={"relative w-[350px] bg-black bg-opacity-40 bg-clip-content rounded-full"} src="profile.webp" animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }} initial={{ y: 20, opacity: 0, filter: "blur(5px)" }} transition={{ ease: "easeOut", duration: 0.3, delay: 0.2 }} />
                    <motion.div className={"max-sm:w-[350px] w-[500px] p-8 bg-blue-800 bg-opacity-25 rounded-3xl backdrop-blur-xl"} animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }} initial={{ y: 20, opacity: 0, filter: "blur(5px)" }} transition={{ ease: "easeOut", duration: 0.3, delay: 0.4 }}>
                        <div className={"font-lato text-2xl py-2"}>
                            {"I'm a new Computer Science graduate with a focus on full-stack development. Although most of my experience and personal projects are with React, I'm eager to refine my technical skills in other areas and see where my career takes me."}
                        </div>
                        <div className={"font-lato text-2xl py-2"} >
                            {"Outside of VSCode, I can be found skiing the slopes, in the bouldering gym, or doing any other stereotypical Vancouverite activity."}
                        </div>
                    </motion.div>
                </div>
                <motion.div className="font-lato font-semibold text-5xl my-24 text-cyan-400 self-start" animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }} initial={{ y: 20, opacity: 0, filter: "blur(5px)" }} transition={{ ease: "easeOut", duration: 0.3, delay: 0.2 }}>
                    Skills
                </motion.div>
                <motion.div className="flex flex-row justify-center items-center self-start w-full flex-wrap" animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }} initial={{ y: 20, opacity: 0, filter: "blur(5px)" }} transition={{ ease: "easeOut", duration: 0.3, delay: 0.4 }}>
                    <div className="min-w-[350px] w-[400px] m-2 px-10 py-10 bg-blue-800 bg-opacity-25 rounded-3xl ">
                        <div className={"font-lato text-3xl font-semibold flex flex-row space-x-3 items-center mb-3"}>
                            <img src="icons8-react.svg" className="h-20"></img>
                            <div>Front-end Development</div>
                        </div>
                        <div className="text-2xl font-lato">
                            Professional experience with Javascript, React, Redux, and Typescript.
                        </div>
                    </div>
                    <div className="min-w-[350px] w-[400px] m-2 px-10 py-10 bg-blue-800 bg-opacity-25 rounded-3xl ">
                        <div className={"font-lato text-3xl font-semibold flex flex-row space-x-3 items-center mb-3"}>
                            <img src="icons8-software-development.svg" className="h-20"></img>
                            <div>Software Engineering</div>
                        </div>
                        <div className="text-2xl font-lato">
                            Studied OOP and data structures in Java, C/C++, and Python.
                        </div>
                    </div>
                </motion.div>
                <motion.div className="font-lato font-semibold text-5xl my-24 text-cyan-400 self-start" animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }} initial={{ y: 20, opacity: 0, filter: "blur(5px)" }} transition={{ ease: "easeOut", duration: 0.3, delay: 0.2 }}>
                    Work Experience
                </motion.div>
                <motion.div className="flex flex-row gap-4 justify-center items-center self-start w-full max-lg:flex-wrap" animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }} initial={{ y: 20, opacity: 0, filter: "blur(5px)" }} transition={{ ease: "easeOut", duration: 0.3, delay: 0.4 }}>
                    <a href="https://www.celayix.com" className="flex justify-center items-center">
                        <motion.img src="celayix.png" whileHover={{ scale: 1.05 }} transition={{ ease: "easeOut", duration: 0.15 }} className="py-3 px-3 h-90 rounded-3xl w-[400px]" />
                    </a>
                    <a href="https://www.vancity.com" className="flex justify-center">
                        <motion.img src="VanCity.jpg" whileHover={{ scale: 1.05 }} transition={{ ease: "easeOut", duration: 0.15 }} className="py-3 px-3 h-90 rounded-3xl w-[400px]" />
                    </a>
                </motion.div>
            </div>
        </>
    )
}

export default About