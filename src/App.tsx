import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import PromptInput from './components/PromptInput';
import { theme } from './constants/theme';
import usePrompt from './hooks/usePrompt';
import ImageGallery from './components/ImageGallery';

function App() {
  const { prompt, updatePrompt, images, handlePromptSubmit } = usePrompt();

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <HeadingWrapper>
          <Heading>AI Image Generator</Heading>
        </HeadingWrapper>
        <PromptInput
          prompt={prompt}
          updatePrompt={updatePrompt}
          handleSumbit={handlePromptSubmit}
        />
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;
