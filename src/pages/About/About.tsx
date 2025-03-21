import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";

const Container = styled.div`
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
`;

const List = styled.ul`
  columns: 3;
  -webkit-columns: 3;
  -moz-columns: 3;
  list-style-type: disc;
  padding-left: 20px;
`;

const ContactInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContactSection = styled.div`
  width: 48%;
`;

const About = () => {
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

  // Helper function to safely get translation string
  const getTranslationString = (key: string, defaultValue: string = ''): string => {
    try {
      return t(key) || defaultValue;
    } catch (error) {
      console.error(`Error retrieving translation for key: ${key}`, error);
      return defaultValue;
    }
  };

  const documentTypes = getTranslationArray('about.documentTypes.list');
  const mobilesZamalek = getTranslationArray('about.contact.zamalekOffice.mobile');
  const mobilesMaadi = getTranslationArray('about.contact.maadiOffice.mobile');

  return (
    <Container>
      <Section>
        <Title>{getTranslationString('about2.title', 'About Us')}</Title>
        <Paragraph>{getTranslationString('about.intro.description', 'Introduction description not available')}</Paragraph>
      </Section>

      <Section>
        <Title>{getTranslationString('about.services.title', 'Our Services')}</Title>
        <Paragraph>{getTranslationString('about.services.description', 'Services description not available')}</Paragraph>
      </Section>

      <Section>
        <Title>{getTranslationString('about.documentTypes.title', 'Documents We Translate')}</Title>
        <List>
          {documentTypes.map((doc, index) => (
            <li key={index}>{doc}</li>
          ))}
        </List>
      </Section>

      <Section>
        <Title>{getTranslationString('about.contact.title', 'Contact Information')}</Title>
        <Paragraph>{getTranslationString('about.contact.description', 'Contact description not available')}</Paragraph>
        
        <ContactInfo>
          <ContactSection>
            <Title>{getTranslationString('about.contact.zamalekOffice.title', 'Zamalek Office')}</Title>
            <Paragraph>{getTranslationString('about.contact.zamalekOffice.address', 'Zamalek Address Not Available')}</Paragraph>
            <Paragraph>{getTranslationString('about.contact.zamalekOffice.telFax', 'Tel/Fax Not Available')}</Paragraph>
            <Paragraph>
              Mobile:
              <br />
              {mobilesZamalek.length > 0 
                ? mobilesZamalek.join(', ') 
                : 'No mobile numbers available'}
            </Paragraph>
          </ContactSection>

          <ContactSection>
            <Title>{getTranslationString('about.contact.maadiOffice.title', 'Maadi Office')}</Title>
            <Paragraph>{getTranslationString('about.contact.maadiOffice.address', 'Maadi Address Not Available')}</Paragraph>
            <Paragraph>{getTranslationString('about.contact.maadiOffice.telFax', 'Tel/Fax Not Available')}</Paragraph>
            <Paragraph>
              Mobile:
              <br />
              {mobilesMaadi.length > 0 
                ? mobilesMaadi.join(', ') 
                : 'No mobile numbers available'}
            </Paragraph>
          </ContactSection>
        </ContactInfo>
      </Section>
    </Container>
  );
};

export default About;