import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang={'fr'}>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width" />
                    <link rel="icon" href="/favicon.ico" />
                    <link href="/fonts/icons.css" rel="stylesheet"/>
                    <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
                    <script src="https://cdn.jsdelivr.net/npm/mailgo@0.8.5/dist/mailgo.min.js" defer></script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
