import { Row, Col, Button } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
import i18n from "i18next";
import styled from 'styled-components';
import { DownloadOutlined } from "@ant-design/icons";
import {
  FooterSection,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

const LanguageWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0;
`;

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    localStorage.setItem('language', language);
  };

  const languages = [
    { code: 'en', label: 'Switch to English', icon: 'united-kingdom.png' },
    { code: 'ar', label: 'Switch to Arabic', icon: 'egypt.png' },
    { code: 'fr', label: 'Switch to French', icon: 'france.png' },
  ];

  return (
    <FooterSection>
      <Container>
        <Row justify="space-between">
          <Col lg={10} md={10} sm={12} xs={12}>
            <Language>{t("Contact")}</Language>
            <Large to="/">{t("Tell us everything")}</Large>
            <Para>{t(`Do you have any question? Feel free to reach out.`)}</Para>
            <a href="mailto:">
              <Chat>{t(`Let's Chat`)}</Chat>
            </a>
          </Col>
        </Row>
        <Row justify="space-between">
          <Col lg={10} md={10} sm={12} xs={12}>
            <Empty />
            <Language>{t("Address")}</Language>
            <Para>{t("Maadi Address Label", { defaultValue: "Maadi Address" })}: {t("Maadi Address Details", { defaultValue: "61, Road 206, Degla, Maadi, Cairo, Egypt" })}</Para>
            <Para>{t("Tel/Fax Label", { defaultValue: "Tel / Fax" })}: (+202) 25211457</Para>
            <Para>{t("Mobile Label", { defaultValue: "Mobile" })}: {t("Maadi Mobiles", { defaultValue: "(+2) 01067000881 – (+2) 01113980003 – (+2) 01283000573" })}</Para>
            <Para>{t("Zamalek Address Label", { defaultValue: "Zamalek Address" })}: {t("Zamalek Address Details", { defaultValue: "3, Dr. Taha Hussien St., Yamama Center, Zamalek, Cairo, Egypt" })}</Para>
            <Para>{t("Tel/Fax Label", { defaultValue: "Tel / Fax" })}: (+202) 27369037</Para>
            <Para>{t("Mobile Label", { defaultValue: "Mobile" })}: {t("Zamalek Mobiles", { defaultValue: "(+2) 01020302444 – (+2) 01094340142 –(+2) 01558125060" })}</Para>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Button 
              type="primary" 
              icon={<DownloadOutlined />} 
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/policy.docx'; 
                link.download = 'policy.docx';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              {t("Our Portfolio")}
            </Button>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <Label htmlFor="select-lang">{t("Language")}</Label>
            <LanguageSwitchContainer>
              <LanguageWrapper>
                {languages.map((lang) => (
                  <LanguageSwitch key={lang.code} onClick={() => handleChange(lang.code)}>
                    <SvgIcon
                      src={lang.icon}
                      aria-label={lang.label}
                      width="30px"
                      height="30px"
                    />
                  </LanguageSwitch>
                ))}
              </LanguageWrapper>
            </LanguageSwitchContainer>
          </Col>
        </Row>
      </Container>
    </FooterSection>
  );
};

export default withTranslation()(Footer);