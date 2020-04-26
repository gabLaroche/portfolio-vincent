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
