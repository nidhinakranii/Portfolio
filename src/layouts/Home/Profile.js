import profileKatakana from 'assets/katakana-profile.svg?url';
// import profileImgLarge from 'assets/profile-large.jpg';
// import profileImgPlaceholder from 'assets/profile-placeholder.jpg';
import profileImg from 'assets/20231010_131712.jpg';
import { Button } from 'components/Button';
// import { DecoderText } from 'components/DecoderText';
import { Divider } from 'components/Divider';
import { Heading } from 'components/Heading';
import { Image } from 'components/Image';
// import { Link } from 'components/Link';
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
      I am Blockchain Developer with expertise in Solidity. My expertise extends to smart
      contract auditing, ensuring top-notch scalability, adaptability, and efficiency for
      diverse blockchain projects..{' '}
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      With a command over Solidity, React.JS, web3, Node.js, Python, Devops tools. I am
      constantly learning in the dynamic world of blockchain, striving for excellence.{' '}
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Beyond coding, I am passionate about giving back through volunteering activities. I
      am eager to connect with fellow enthusiasts, innovators, and thought leaders who
      share a similar drive.{' '}
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      My core values include integrity, honesty, and a commitment to excellence in every
      endeavor. Together, let us unlock the full potential of blockchain for a better
      world. Feel free to reach out, and let us make things happen!{' '}
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
                href="/skill"
                icon="send"
              >
                Send me a message
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
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
                <svg
                  aria-hidden="true"
                  width="500"
                  zoomAndPan="magnify"
                  viewBox="10 -120 120 512.499988"
                  height="1150"
                  className={styles.svg}
                  data-visible={visible}
                >
                  <use href={`${profileKatakana}#ruprekha-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
