import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import PromptInput from './components/PromptInput';
import { theme } from './constants/theme';
import usePrompt from './hooks/usePrompt';
import ImageGallery from './components/ImageGallery';

function App() {
  const { prompt, updatePrompt, images } = usePrompt();

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <HeadingWrapper>
          <Heading>AI Image Generator</Heading>
        </HeadingWrapper>
        <PromptInput prompt={prompt} updatePrompt={updatePrompt} />
        <ImageGallery images={images} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const HeadingWrapper = styled.header`
  display: flex;
  justify-content: center;
`;

const Heading = styled.h1`
  color: #fcfcfc;
  font-size: ${({ theme }) => theme.fontSizes.xxl};
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/images/stacked-waves-haikei.svg');
  background-repeat: no-repeat;
  background-size: cover;
`;
