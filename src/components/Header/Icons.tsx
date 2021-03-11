import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import ThemeToggler from './ThemeToggler';

const Icons = () => {
  const { ready, i18n } = useTranslation();
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

      <ThemeToggler />
    </Container>
  );
};

export default Icons;
const Container = styled.div`
  display: flex;
  align-items: center;
`;
const LanguageContainer = styled.div`
  margin: 0 1rem;
  font-weight: ${props => props.theme.font.bold};
`;
const Icon = styled.button`
  color: ${props => props.theme.headingColor};
`;
