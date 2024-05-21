// Contact.jsx

import React, { useEffect, useRef } from 'react';
import { Footer } from 'components/Footer';
import { Section } from 'components/Section';
import styles from './Contact.module.css'; // Import local module CSS
import { DecoderText } from 'components/DecoderText';
import { Heading } from 'components/Heading';

import Card from 'react-bootstrap/Card';

export const Contact = () => {
  const cardContainerRef = useRef(null);

  useEffect(() => {
    // Toggle the bounce animation class on mount
    const cardContainer = cardContainerRef.current;
    cardContainer.classList.add('bounce');

    // Remove the animation class after the animation duration (1 second in this case)
    const timeoutId = setTimeout(() => {
      cardContainer.classList.remove('bounce');
    }, 1000);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  // Define your skills here
  const skills = [
    'Solidity',
    'React.JS',
    'Web3.JS',
    'Node.JS',
    'Python',
    'Ethereum',
    'Jira',
    'Docker',
    'Truffle',
    'Ganache',
  ];

  return (
    <div className={styles.contactContainer}>
      <Section className={styles.contact}>
        <div ref={cardContainerRef} className={`${styles.cardContainer} cardContainer`}>
          {skills.map((skill, index) => (
            <Card key={index} className={styles.card}>
              <Card.Body>{skill}</Card.Body>
            </Card>
          ))}
        </div>
        <Footer className={styles.footer} />
      </Section>
    </div>
  );
};
