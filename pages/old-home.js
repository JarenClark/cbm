import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from './../components/Layout'
import { HomepageHero, HomepageAboutColumns } from '../components/Homepage'
import { CapabilitiesBaits, SectionTitle } from '../components/Common'

export default function OldHome() {
  return (
    <>
      <Head>
        <title>Center for Breakthrough Medicine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomepageHero />

        <HomepageAboutColumns />

        <SectionTitle 
          title={'Capabilities'}
        />

        <CapabilitiesBaits />

      </Layout>
    </>
  )
}
