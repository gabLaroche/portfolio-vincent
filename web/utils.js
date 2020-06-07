import React, {useLayoutEffect, useEffect} from 'react';
import client from "./client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source)
};

export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const socialMediaQuery = "'socialMediaLinks': *[ _type == \"socialMediaLink\" ] { _id, title, iconName, link }"