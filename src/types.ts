export type updatePrompt = (event: React.ChangeEvent<HTMLInputElement>) => void;
export type handleSumbit = () => void;
export type prompt = string;
export type images = string[];

type imageResponseSuccess = {
  created: string;
  data: { url: string }[];
};
type imageResponseError = {
  error: {
    message: string;
  };
};
export type imageData = imageResponseSuccess | imageResponseError;

export interface PromptInputProps {
  prompt: prompt;
  updatePrompt: updatePrompt;
  handleSumbit: handleSumbit;
}

export interface ImageGalleryProps {
  images: images;
}
