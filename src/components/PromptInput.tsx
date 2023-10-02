import styled from 'styled-components';
import { PromptInputProps } from '../types';

const PromptInput: React.FC<PromptInputProps> = ({ prompt, updatePrompt }) => {
  return (
    <Wrapper>
      <InputContainer>
        <Input
          id="prompt"
          name="prompt"
          type="text"
          placeholder="Enter prompt"
          value={prompt}
          onChange={updatePrompt}
        />
        <SubmitIcon className="submit-icon">➢</SubmitIcon>
      </InputContainer>
    </Wrapper>
  );
};

export default PromptInput;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.large};
  gap: ${({ theme }) => theme.spacing.small};
`;

const Input = styled.input`
  border-radius: 16px;
  border: none;
  ${({
    theme: {
      spacing: { small, medium },
    },
  }) => `
    padding: ${small};
    padding-left: ${medium};
`}
  min-width: 320px;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  box-shadow: rgb(38, 57, 77) 0 20px 30px -10px;
`;

const SubmitIcon = styled.span`
  ${({ theme: { colors, fontSizes } }) => `
    color: ${colors.dark};
    font-size: ${fontSizes.large};
  `}
  position: absolute;
  right: 16px;
  top: 4px;
  cursor: pointer;
`;

const InputContainer = styled.div`
  position: relative;
`;
