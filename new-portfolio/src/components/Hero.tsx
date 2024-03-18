import { styles } from '../styles'
import { motion, useAnimate } from 'framer-motion'
import { useEffect } from 'react';
function Hero({ x, y }: { x: number, y: number }): JSX.Element {
    const [scopeMoon, animateMoon] = useAnimate();
    const [scopeStar, animateStar] = useAnimate();
    const [scopeStar2, animateStar2] = useAnimate();


    useEffect(() => {
        moonAnimation()
        starAnimation()
        starAnimation2()
    }, [])

    async function starAnimation() {
        await animateStar(scopeStar.current, { opacity: 1, filter: 'blur(4px)' }, { duration: 1, delay: 0.6 })
        await new Promise(r => setTimeout(r, 3000));
        await animateStar([
            [scopeStar.current, { filter: 'blur(0px)' }, { duration: 1 }],
            [scopeStar.current, { filter: 'blur(4px)' }, { delay: 3, duration: 1 }
            ]], { repeat: Infinity, repeatDelay: 5 })
    }

    async function starAnimation2() {
        await animateStar2(scopeStar2.current, { opacity: 1, filter: 'blur(4px)' }, { duration: 1, delay: 0.6 })
        await new Promise(r => setTimeout(r, 6000));
        await animateStar2([
            [scopeStar2.current, { filter: 'blur(0px)' }, { duration: 1 }],
            [scopeStar2.current, { filter: 'blur(4px)' }, { delay: 3, duration: 1 }
            ]], { repeat: Infinity, repeatDelay: 5 })
    }

    async function moonAnimation() {
        await animateMoon(scopeMoon.current, { opacity: 1, filter: 'blur(4px)' }, { duration: 1, delay: 0.6 })
        await animateMoon([[scopeMoon.current, { filter: 'blur(0px)' }, { duration: 1 }], [scopeMoon.current, { filter: 'blur(4px)' }, { delay: 3, duration: 1 }]], { repeat: Infinity, repeatDelay: 5 })
    }
    return (
        <>
            <div style={{ top: y, left: x }} className={`h-[100px] w-[100px] -z-10 fixed -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl bg-cyan-400`}></div>
            <div className='h-screen fixed bg-[linear-gradient(20deg,rgba(0,0,0,1),rgba(19,8,106,1),rgba(0,0,0,1))] w-screen -z-50'>
                <img className='fixed h-[150px] top-1/4 right-40 blur-sm opacity-0' ref={scopeMoon} src={'icons8-moon-90.png'} />
                <img className='fixed h-[100px] top-1/4 left-20 blur-sm opacity-0' ref={scopeStar} src={'icons8-4-point-star-64.png'} />
                <img className='fixed h-[100px] top-1/3 left-2/3 blur-sm opacity-0' ref={scopeStar2} src={'icons8-4-point-star-64.png'} />
            </div>
            <div className={`px-[150px] py-[72px] w-full flex flex-col vh-screen`}>
                <div className='h-[calc((100vh-72px)/1.75)] flex items-end'>
                    <div className='overflow-hidden w-full'>
                        <motion.div animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }} initial={{ y: 20, opacity: 0, filter: "blur(5px)" }} transition={{ ease: "easeOut", duration: 0.3, delay: 0.2 }}
                            className='text-9xl font-lato font-semibold  text-cyan-400'>
                            Hi! I'm Hansoo
                        </motion.div>
                    </div>
                </div>
                <div>
                    <div className='overflow-hidden w-full'>
                        <motion.div animate={{ y: 0, opacity: 1, filter: "blur(0px)" }} initial={{ y: -20, opacity: 0, filter: "blur(5px)" }} transition={{ ease: "easeOut", duration: 0.3, delay: 0.4 }}
                            className='text-4xl w-full h-full font-lato'>
                            a software developer on a mission to turn ideas into innovative solutions. Explore my site and let's shape the future together!
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero