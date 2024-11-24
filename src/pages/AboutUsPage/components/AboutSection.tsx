import React from 'react';
import styles from './AboutSection.module.css';

interface AboutSectionProps {
  title: string;
  content: string | React.ReactNode;
}

export default function AboutSection({ title, content }: AboutSectionProps) {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <p className={styles.sectionContent}>{content}</p>
    </div>
  );
}
