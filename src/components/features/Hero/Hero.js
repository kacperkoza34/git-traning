import React, { useRef, useEffect } from 'react';
import styles from './Hero.module.scss';
import { ReactComponent as Icon } from './Icon.svg';
import gsap from 'gsap';

function Hero() {
  const wrapper = useRef(null);

  useEffect(() => {
    const [elements] = wrapper.current.children;

    const message1 = elements.querySelectorAll('.message1');
    const message2 = elements.querySelectorAll('.message2');
    const message3 = elements.querySelectorAll('.message3');

    console.log(message1);
  });

  return (
    <div className={styles.hero}>
      <div ref={wrapper} className={styles.wrapper}>
        <Icon/>
      </div>
    </div>
  );
}

export default Hero;
