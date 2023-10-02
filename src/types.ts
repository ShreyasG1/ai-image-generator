export type updatePrompt = (event: React.ChangeEvent<HTMLInputElement>) => void;
export type prompt = string;
export type images = object[];

export interface PromptInputProps {
  prompt: prompt;
  updatePrompt: updatePrompt;
}

export interface ImageGalleryProps {
  images: images;
}
