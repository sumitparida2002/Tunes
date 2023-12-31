import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import Layout from '../components/Layout'
import apolloClient from '../lib/apollo'
import { UserProvider } from '@auth0/nextjs-auth0/client'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>

    <ApolloProvider client={apolloClient}>
    <Layout>
          <Component {...pageProps} />
    </Layout>

  </ApolloProvider>
  </UserProvider>

  )
}
