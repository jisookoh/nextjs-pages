import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from "styled-components";
import BasicLayout from '../components/common/BasicLayout';
import globalTheme from '../components/style/global-theme';

function App({ Component, pageProps }: AppProps) {
	return(
  	<React.Fragment>
		<ThemeProvider theme={globalTheme}>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
				<title>지수의 포트폴리오</title>
				<meta name="description" content="지수의 퍼블리싱 일기" />
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
