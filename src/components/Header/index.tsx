import { useState, useCallback } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation, TFunction, useTranslation } from "react-i18next";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface HeaderProps {
  t: TFunction;
}

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const LanguageWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px 0;
`;

const Header = ({ t }: HeaderProps) => {
  const [isDrawerVisible, setDrawerVisibility] = useState(false);
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', label: 'Switch to English', icon: 'united-kingdom.png' },
    { code: 'ar', label: 'Switch to Arabic', icon: 'egypt.png' },
    { code: 'fr', label: 'Switch to French', icon: 'france.png' },
  ];

  const toggleDrawer = useCallback(() => {
    setDrawerVisibility((prev) => !prev);
  }, []);

  const handleLanguageChange = useCallback((langCode: string) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('preferredLanguage', langCode);
  }, [i18n]);

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between" align="middle">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.png" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <NavContainer>
              <MenuContainer>
                <MenuItem 
                  t={t} 
                  languages={languages}
                  handleLanguageChange={handleLanguageChange}
                />
              </MenuContainer>
            </NavContainer>
          </NotHidden>
          <Burger onClick={toggleDrawer} aria-label="Toggle menu">
            <Outline />
          </Burger>
        </Row>
        <Drawer
          closable={false}
          open={isDrawerVisible}
          onClose={toggleDrawer}
          placement="right"
          aria-label="Navigation menu"
        >
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleDrawer}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem 
            t={t} 
            languages={languages}
            handleLanguageChange={handleLanguageChange}
          />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

interface MenuItemProps {
  t: TFunction;
  languages: Array<{ code: string; label: string; icon: string; }>;
  handleLanguageChange: (langCode: string) => void;
}

const MenuItem = ({ t, languages, handleLanguageChange }: MenuItemProps) => (
  <>
    <CustomNavLinkSmall as={Link} to="/about">
      <Span>{t("About")}</Span>
    </CustomNavLinkSmall>
    <CustomNavLinkSmall as={Link} to="/workers">
      <Span>{t("Workers")}</Span>
    </CustomNavLinkSmall>
    <CustomNavLinkSmall as={Link} to="/pricing">
      <Span>{t("Pricing")}</Span>
    </CustomNavLinkSmall>
    <CustomNavLinkSmall as={Link} to="/contact" style={{ width: "180px" }}>
      <Span>
        <Button>{t("Contact")}</Button>
      </Span>
    </CustomNavLinkSmall>
    <Span>
      <LanguageSwitchContainer>
        <LanguageWrapper>
          {languages.map((lang) => (
            <LanguageSwitch 
              key={lang.code} 
              onClick={() => handleLanguageChange(lang.code)}
            >
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
    </Span>
  </>
);

export default withTranslation()(Header);