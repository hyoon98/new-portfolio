

function About({ x, y }: { x: number, y: number }): JSX.Element {
    return (
        <>
            <div style={{ top: y, left: x }} className={`h-[100px] w-[100px] -z-10 fixed -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-cyan-400`}></div>
            <div className='h-screen fixed bg-[linear-gradient(20deg,rgba(0,0,0,1),rgba(19,8,106,1),rgba(0,0,0,1))] w-screen -z-50'>
            </div>
        </>
    )
}

export default About