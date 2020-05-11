import React from 'react';
import client from "./client";
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client);

export function urlFor(source) {
    return builder.image(source)
}
