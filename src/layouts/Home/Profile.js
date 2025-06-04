import profileKatakana from 'assets/katakana-profile.svg?url';
import profileImg from 'assets/20231010_131712.jpg';
import { Button } from 'components/Button';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
import { Section } from 'components/Section';
import { Text } from 'components/Text';
import { Transition } from 'components/Transition';
import { Fragment, useState } from 'react';
import { media } from 'utils/style';
import styles from './Profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      Welcome!
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I’m a Developer Relations Lead and Blockchain Developer passionate about building
      meaningful tools, empowering communities, and simplifying tech through education and
      content.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My journey spans smart contract auditing, DevRel strategy, AI education, and
      developer documentation across ecosystems like MetisL2, LazAI, and Chainsense.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      With hands-on experience in Solidity, React.js, Node.js, web3, Python, and DevOps, I
      enjoy translating complex ideas into accessible resources—through blog posts,
      livestreams, and workshops.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I care deeply about tech for good—leading with empathy, mentoring the next
      generation, and constantly learning in this dynamic space. If you're building with
      purpose, I’d love to connect.
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {visible => (
          <div className={styles.content}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="mailto:nidhinakrani@gmail.com?subject=Contact%20from%20Profile%20Page"
                icon="send"
              >
                Let’s build something impactful together.
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About Me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  // placeholder={profileImgPlaceholder}
                  srcSet={[profileImg]}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me standing"
                />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
