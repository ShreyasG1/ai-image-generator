import { useState } from 'react';
import {
  prompt,
  updatePrompt,
  images,
  handleSumbit,
  imageData,
} from '../types';

const usePrompt = () => {
  const [prompt, setPrompt] = useState<prompt>('');
  const [images, setImages] = useState<images>([]);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const updatePrompt: updatePrompt = (event) => {
    setPrompt(event.target.value);
  };

  const handlePromptSubmit: handleSumbit = async () => {
    if (isProcessing) return;
    // TODO: Make the api call to get images
    try {
      setIsProcessing(true);

      const body = JSON.stringify({
        prompt: prompt.trim(),
        n: 4,
        size: '256x256', //other options: 512x512, 1024x1024
      });

      const headers = {
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      };

      const options = {
        method: 'POST',
        headers,
        body,
      };

      const response = await fetch(
        'https://api.openai.com/v1/images/generations',
        options
      );

      const imageData: imageData = await response.json();
      if ('error' in imageData) {
        throw new Error(imageData.error.message);
      }

      setImages(imageData.data.map(({ url }) => url));
      setIsProcessing(false);
    } catch (error) {
      setIsProcessing(false);
      console.error('Request failed', error);
    }
  };

  return {
    prompt,
    updatePrompt,
    handlePromptSubmit,
    images,
  };
};

export default usePrompt;
