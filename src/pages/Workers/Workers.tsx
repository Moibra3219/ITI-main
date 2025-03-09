import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const WorkersContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  color: #333;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  color: #666;
  margin-bottom: 15px;
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 30px;
  columns: 3;
  -webkit-columns: 3;
  -moz-columns: 3;
`;

const Workers = () => {
  const { t } = useTranslation();

  // Helper function to safely convert translation to array
  const getTranslationArray = (key: string): string[] => {
    try {
      const translation = t(key, { returnObjects: true });
      return Array.isArray(translation) ? translation : [];
    } catch (error) {
      console.error(`Error retrieving translation for key: ${key}`, error);
      return [];
    }
  };

  return (
    <WorkersContainer>
      <Section>
        <Title>{t('workers.title')}</Title>
        <Paragraph>
          {t('workers.introduction.paragraph1')}
        </Paragraph>
        <Paragraph>
          {t('workers.introduction.paragraph2')}
        </Paragraph>
      </Section>

      <Section>
        <Title>{t('workers.interpretationServices.title')}</Title>
        <Paragraph>
          {t('workers.interpretationServices.description')}
        </Paragraph>
        <List>
          {getTranslationArray('workers.interpretationServices.eventTypes').map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </List>
      </Section>

      <Section>
        <Title>{t('workers.qualityCommitment.title')}</Title>
        <List>
          {getTranslationArray('workers.qualityCommitment.points').map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </List>
      </Section>

      <Section>
        <Title>{t('workers.translationCharacteristics.title')}</Title>
        <List>
          {getTranslationArray('workers.translationCharacteristics.points').map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </List>
      </Section>

      <Section>
        <Title>{t('workers.confidentiality.title')}</Title>
        <List>
          {getTranslationArray('workers.confidentiality.points').map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </List>
      </Section>

      <Section>
        <Title>{t('workers.statistics.title')}</Title>
        <List>
          {getTranslationArray('workers.statistics.points').map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </List>
      </Section>
    </WorkersContainer>
  );
};

export default Workers;