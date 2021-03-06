import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from './../components/Layout'
import { FullScreenSection, HomepageHero, HomepageAboutColumns } from '../components/Homepage'
import { CapabilitiesBaits, SectionTitle } from '../components/Common'

export default function Home() {
  return (
    <>
      <Head>
        <title>Center for Breakthrough Medicine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <FullScreenSection />
      </Layout>
    </>
  )
}
