import { useState } from 'react';
import { prompt, updatePrompt, images } from '../types';

const usePrompt = () => {
  const [prompt, setPrompt] = useState<prompt>('');
  const [images, setImages] = useState<images>([]);

  const updatePrompt: updatePrompt = (event) => {
    setPrompt(event.target.value);
  };

  const handlePromptSubmit = () => {
    // TODO: Make the api call to get images
    setImages([]); // TODO: Set images from the response
  };

  return {
    prompt,
    updatePrompt,
    handlePromptSubmit,
    images,
  };
};

export default usePrompt;
