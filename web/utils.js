/* eslint-disable */
import React, { useLayoutEffect, useEffect } from 'react';
import client from './client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};

export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const socialMediaQuery =
  '\'socialMediaLinks\': *[ _type == "socialMediaLink" ] { _id, title, iconName, link }';

export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
    /[xy]/g,
    (character) => {
      let randomNum = (Math.random() * 16) | 0,
        value = character == 'x' ? randomNum : (randomNum & 0x3) | 0x8;
      return value.toString(16);
    }
  );
};
