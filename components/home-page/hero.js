import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Hao.png"
          alt="Hao's image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Hao</h1>
      <p>
        I'm a software engineer. I blog about web development - especially about front-end frameworks
    </p>
    </section>
  );
}

export default Hero;
