import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

export const SideMenuContainer = styled.aside`
  position: fixed;
  z-index: 100;
  width: 300px;
  height: 100%;
  background: rgba(255, 210, 168, 0.95);
  display: grid;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? '0' : '-400px')};

  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
  margin-right: 1.5em;
  @media screen and (max-width: 768px) {
      margin-right: 0.5em;
    }
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

export const SideMenuLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #ff00b2;
    transition: 0.2s ease-in-out;
  }
`;

export const SideBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SidebarRoute = styled(Link)`
  background: #ff00b2;
  white-space: nowrap;
  padding: 16px 64px;
  color: #fff;
  font-size: 16px;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
