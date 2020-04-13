import Prismic from 'prismic-javascript'

export const apiEndpoint = 'https://portfolio-vincent.cdn.prismic.io/api/v2';
export const accessToken = '';

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
    Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
);

export const linkResolver = (doc) => {
    // URL for a page type
    if (doc.type === 'page') {
        return `/${doc.uid}`
    }
    // Backup for all other types
    return '/'
};


export const hrefResolver = (doc) => {
    return '/'
};

const createClientOptions = (req = null, prismicAccessToken = null) => {
    const reqOption = req ? { req } : {};
    const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {};
    return {
        ...reqOption,
        ...accessTokenOption,
    }
};
