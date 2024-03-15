import { motion } from "framer-motion"


function About({ x, y }: { x: number, y: number }): JSX.Element {

    const skills = ["React", "Javascript", "Python", "Git", "C/C++", "Java", "Typescript"]


    return (
        <>
            <div style={{ top: y, left: x }} className={`h-[100px] w-[100px] -z-10 fixed -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-cyan-400`}></div>
            <div className='h-screen fixed bg-[linear-gradient(20deg,rgba(0,0,0,1),rgba(19,8,106,1),rgba(0,0,0,1))] w-screen -z-50'>
            </div>
            <div className={`px-[150px] py-[72px] w-full flex flex-col vh-screen justify-center items-center`}>
                <motion.div className={"font-lato text-5xl font-semibold py-10"} animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }} initial={{ y: 20, opacity: 0, filter: "blur(5px)" }} transition={{ ease: "easeOut", duration: 0.3, delay: 0.2 }}>
                    About Me
                </motion.div>
                <motion.div className={"flex flex-row justify-evenly items-center mt-5"} animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }} initial={{ y: 20, opacity: 0, filter: "blur(5px)" }} transition={{ ease: "easeOut", duration: 0.3, delay: 0.4 }}>
                    <div className={"font-lato text-5xl font-semibold py-10 w-[400px]"} >
                        Test
                    </div>
                    <div className={"w-[400px] m-2 p-3 bg-gray-400 bg-opacity-25 rounded-3xl backdrop-blur-xl"}>
                        <div className={"font-lato text-xl py-2"}>
                            {"I'm a new Computer Science graduate with a focus on full-stack development. Although most of my experience and personal projects are with React, I am eager to refine my various technical skills in other areas and see where my career takes me."}
                        </div>
                        <div className={"font-lato text-xl py-2"} >
                            {"Outside of VSCode, I can be found skiing the slopes, in the bouldering gym, or doing any other stereotypical Vancouverite activity."}
                        </div>
                    </div>
                </motion.div>
                <div className="flex flex-row justify-center items-center self-start w-full">
                    <div className="">
                        <div className={"p-3 rounded-2xl bg-gray-400 bg-opacity-25 backdrop-blur-xl text-2xl font-semibold font-lato"}>
                            Skills:
                        </div>
                    </div>
                    <ul className="flex flex-row justify-center items-center">
                        {skills.map((skill: string) => (
                            <li className="p-2 m-4 bg-gray-400 bg-opacity-25 backdrop-blur-xl rounded-xl">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default About