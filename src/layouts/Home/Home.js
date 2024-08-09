// import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
// import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
// import gamestackTexture from 'assets/gamestack-login.jpg';
import stakingcompundimg from 'assets/staking-compound-1.png';
import votingmainimg from 'assets/voting_main.png';
import cryptoloopimg from 'assets/cryptoloop-1.png';
// import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
// import sliceTexture from 'assets/slice-app.jpg';
// import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
// import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
// import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Developer', 'Researcher', 'Analyst', 'Strategist', 'Advisor'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Blockchain + Developer"
        description="Design portfolio of Nidhi Nakrani — a product designer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Staking-Autocompound"
        description="Designed a smart cotract for staking compound with testing script"
        buttonText="View project"
        buttonLink="/projects/staking"
        model={{
          type: 'laptop',
          alt: 'Staking Compound image',
          textures: [
            {
              srcSet: [stakingcompundimg, stakingcompundimg],
              placeholder: stakingcompundimg,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Cryptoloop (ongoing)"
        description="Designing a platform for social trading on web3!"
        buttonText="View website"
        buttonLink="/projects/cryptoloo"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: [cryptoloopimg, cryptoloopimg],
              placeholder: cryptoloopimg,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="E-Vote System on Ethereum Blockchain"
        description="A decentralized voting application built on the Ethereum blockchain, providing a secure and transparent platform for conducting electronic voting."
        buttonText="View project"
        buttonLink="/projects/voting"
        model={{
          type: 'laptop',
          alt: 'E-vote system on Ethreum..!',
          textures: [
            {
              srcSet: [votingmainimg, votingmainimg],
              placeholder: votingmainimg,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
