import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

// Color palette for consistent theming
const COLORS = {
  primary: '#18216d',
  secondary: '#2e186a',
  accent: 'rgb(255, 130, 92)',
  text: '#404041',
};

export const HeaderSection = styled.header`
  padding: 1rem 0.5rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  .ant-row-space-between {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const NavLink = styled.div`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled.div`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled.div`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: ${COLORS.secondary};
    font-size: 22px;
  }
`;

export const NotHidden = styled.div`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled.h5`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: ${COLORS.primary};
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled.span`
  font-weight: 500;
  color: ${COLORS.text};
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

export const Span = styled.span`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: ${COLORS.accent};
    text-underline-position: under;
    text-decoration: ${COLORS.accent} wavy underline;
  }
`;

export const Language = styled.h4`
  font-size: 22px;
  text-transform: capitalize;
  color: ${COLORS.primary};

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const LanguageSwitch = styled.div`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;