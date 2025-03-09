import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const PricingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 30px;
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
`;

const List = styled.ul`
  list-style-type: disc;
  padding-left: 30px;
`;

const Pricing = () => {
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
    <PricingContainer>
      <Section>
        <Title>{t('pricing.title')}</Title>
        
        <Paragraph>
          {t('pricing.introduction.paragraph1')}
        </Paragraph>
        
        <Paragraph>
          {t('pricing.introduction.paragraph2')}
        </Paragraph>
      </Section>

      <Section>
        <Title>{t('pricing.quoteProcess.title')}</Title>
        <List>
          {getTranslationArray('pricing.quoteProcess.details').map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </List>
      </Section>

      <Section>
        <Title>{t('pricing.pricingPrinciples.title')}</Title>
        <List>
          {getTranslationArray('pricing.pricingPrinciples.details').map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </List>
      </Section>

      <Section>
        <Title>{t('pricing.additionalServices.title')}</Title>
        <List>
          {getTranslationArray('pricing.additionalServices.details').map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </List>
      </Section>

      <Section>
        <Title>{t('pricing.generalNotes.title')}</Title>
        <List>
          {getTranslationArray('pricing.generalNotes.details').map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </List>
      </Section>
    </PricingContainer>
  );
};

export default Pricing;