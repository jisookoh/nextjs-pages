import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
    
        try {
          ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
            });
    
          const initialProps = await Document.getInitialProps(ctx);
    
          return {
            ...initialProps,
            styles: (
              <>
                {initialProps.styles}
                {sheet.getStyleElement()}
              </>
            ),
          };
        } catch (error: any) {
            throw error;
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                        <meta charSet="utf-8" />
                        <meta httpEquiv="Pragma" content="no-cache" />
                        <meta httpEquiv="Expires" content="-1" />
                        <meta name="google" content="notranslate" />
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                        <link
                            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
                            rel="stylesheet"
                        />
                        <link 
                          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" 
                          rel="stylesheet" 
                          />
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dosis:wght@200;300;400;500;600;700;800&display=swap" />
                        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" />
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                </Head>
                <body>
                        <Main />
                        <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;