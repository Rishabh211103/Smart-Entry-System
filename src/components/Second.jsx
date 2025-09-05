import React from 'react'
import tedXGeu from "../assets/tedxgeu.svg";
import Heading from './Heading';
import {motion} from 'framer-motion'

const Second = () => {
    return (
        <div className="home-page-wrapper">
            <div className="home-page-second ">
                <motion.div 
                  initial={{ opacity:0, x: -250 }}
                  animate={{opacity:1, x: 0 }}
                  transition={{ duration: 0.6,delay:1}}
                className="sec-di">
                    <Heading
                        heading={'What is TEDx?'}
                        content={'A TEDx event is a local gathering where live TED-like talks and performances are shared with the community. It is a suite of short, carefully prepared talks, demonstrations and performances that are idea-focused, covering a wide range of disciplines to foster learning, inspiration and wonder along with simultaneously provoking conversations that matter. It is organized by volunteers from the local community, and just like TED events, it lacks any commercial, religious or political agenda. All TEDx events present multiple issues and a diversity of voices from a plethora of topics. After all, what’s the fun without a little variety?                         '}
                    />
                    <Heading
                        heading={'About Graphic Era'}
                        content={'Graphic Era Deemed to be University, is the culmination of the vision of its founder, Prof (Dr) Kamal Ghanshala. The university has been conferred All-India NIRF Rank 75 in the Engineering Category, thus being accorded as the highest-ranked Engineering University in Uttarakhand, after IIT Roorkee, in the MHRD NIRF (National Institutional Ranking Framework) Rankings in September 2021.'}
                    />
                </motion.div>
                <div className="home-second-img">
                    <img src={tedXGeu} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Second