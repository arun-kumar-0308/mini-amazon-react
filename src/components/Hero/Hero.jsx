import React from 'react'
import css from './Hero.module.css';
import HeroImg from '../../assets/hero.png';
import { RiShoppingBagFill } from 'react-icons/ri';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';

function Hero() {
    const transition = { duration: 3, type: "spring" }

    return (
        <>
            <div className={css.container}>

                {/* Left side */}
                <div className={css.h_sides}>
                    <span className={css.text1}>Skin production cream</span>

                    <div className={css.text2}>
                        <span className={css.trend} id="trendy">Trendy collection</span>
                        <span> Seedily say has suitable disposal and boy.Exercise joy man children.</span>
                    </div>
                </div>


                <div className={css.wrapper}>
                    <motion.div
                        initial={{ bottom: "2rem" }}
                        whileInView={{ bottom: "0rem" }}
                        className={css.blueCircle}
                        transition={transition}
                    ></motion.div>


                    <img src={HeroImg} alt="" width={600} />
                    <div className={css.cart2}>
                        <RiShoppingBagFill />
                        <div className={css.signup}>
                            <span>Best Signup Offers</span>

                            <div>
                                <BsArrowRight />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <div className={css.h_sides}>
                    <div className={css.traffic}>
                        <span>1.5m</span>
                        <span>Monthly Traffic</span>
                    </div>

                    <div className={css.customers}>
                        <span>100k</span>
                        <span>Happy customers</span>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Hero