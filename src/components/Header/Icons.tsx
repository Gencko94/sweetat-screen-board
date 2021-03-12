import { useTranslation } from 'react-i18next';
import styled, { css } from 'styled-components';
import ThemeToggler from './ThemeToggler';
import { BsFillGearFill } from 'react-icons/bs';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { DataProvider } from '../../pages/Home';
import { CSSTransition } from 'react-transition-group';
const Icons = () => {
  const { ready, i18n } = useTranslation();
  const { mode } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const { changeVolume, volume, fetchInterval, setFetch } = useContext(
    DataProvider
  );
  const changeLanguage = (lng: string) => {
    if (ready) {
      i18n.changeLanguage(lng);
    }
  };
  return (
    <Container>
      {/* <LanguageContainer>
        <>
          {i18n.language === 'ar' && (
            <Icon onClick={() => changeLanguage('en')}>English</Icon>
          )}
          {i18n.language === 'en' && (
            <Icon onClick={() => changeLanguage('ar')}>العربية</Icon>
          )}
        </>
      </LanguageContainer> */}

      <Icon onClick={() => setOpen(!open)}>
        <BsFillGearFill size={25} />
      </Icon>
      <CSSTransition in={open} timeout={150} classNames="dd" unmountOnExit>
        <DropDownContainer mode={mode}>
          <Block>
            <Text>Toggle Theme</Text>
            <ThemeToggler />
          </Block>
          <Block>
            <Text>Volume</Text>
            <RangeInput
              value={volume}
              onChange={changeVolume}
              type="range"
              min={0}
              max={1}
              step={0.1}
            />
          </Block>
          <Block>
            <Text>Fetch/(s)</Text>
            <Input
              mode={mode}
              type="number"
              value={fetchInterval}
              onChange={e => setFetch(e.target.value)}
            />
          </Block>
        </DropDownContainer>
      </CSSTransition>
    </Container>
  );
};

export default Icons;
const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  flex: 1;
`;
const LanguageContainer = styled.div`
  margin: 0 1rem;
  font-weight: ${props => props.theme.font.bold};
`;
const Icon = styled.button`
  color: ${props => props.theme.subHeading};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0.5rem;
`;
const IconContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0;
`;
const Text = styled.p`
  font-weight: ${props => props.theme.font.semibold};
  margin: 0 0.5rem;
  font-size: 0.9rem;
`;
const DropDownContainer = styled.div<{ mode?: string }>`
  position: absolute;
  left: 50%;
  margin-left: -100px;
  padding: 0.5rem;
  top: 150%;
  width: 175px;
  position: absolute;
  left: 50%;
  margin-left: -90px;
  ${props =>
    props.mode === 'light' &&
    css`
      box-shadow: ${props => props.theme.shadow};
    `};
  ${props =>
    props.mode === 'dark' &&
    css`
      border: 1px solid ${props => props.theme.btnBorder};
    `}
  border-radius: 6px;
  background-color: ${props => props.theme.overlayColor};
  z-index: 2;
`;
const RangeInput = styled.input`
  min-width: 0;
  padding: 0.25rem 0;
`;
const Input = styled.input<{ mode?: string }>`
  padding: 0.25rem;
  border-radius: 6px;
  background-color: ${props => props.theme.inputColorLight};
  min-width: 0;
  width: 75px;
  font-size: 0.8rem;
  font-weight: ${props => props.theme.font.bold};
  text-align: center;
  color: ${props => props.theme.subHeading};
  ${props =>
    props.mode === 'dark' &&
    css`
      border: 1px solid ${props => props.theme.btnBorder};
    `}
`;
