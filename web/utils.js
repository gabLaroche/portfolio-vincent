import React from 'react';
import client from "./client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
    return builder.image(source)
};
