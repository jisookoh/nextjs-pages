import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from "styled-components";
import { DefaultSeo } from "next-seo";
import BasicLayout from '../components/common/BasicLayout';
import globalTheme from '../components/style/global-theme';
import SEO from "next-seo.config";

function App({ Component, pageProps }: AppProps) {
	return(
  	<React.Fragment>
		<ThemeProvider theme={globalTheme}>
			<DefaultSeo {...SEO} />
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
				<title>Js Portpolio</title>
				<meta name="description" content="지수의 포트폴리오 사이트" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<BasicLayout>
				<Component {...pageProps} />
			</BasicLayout>
		</ThemeProvider>
  	</React.Fragment>
	)
}

export default App;
