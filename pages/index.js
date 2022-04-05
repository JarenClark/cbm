import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from './../components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Center for Breakthrough Medicine</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className='bg-gray-800 text-white'>
          <div className='container py-8 lg:py-20 max-w-6xl'>
            <div className='lg:px-48'>
              <h1 className='font-bold text-5xl text-center'>
                The Only Complete Solution for the Discovery, Development, and Commercialization of Cell and Gene Therapies.
              </h1>
            </div>
            <div className='flex flex-wrap justify-between -mx-4 mt-8'>
              <div className='rounded-lg transition duration-200 w-1/4 border-2 border-blue-500 border-solid hover:bg-gray-800 hover:text-blue-500 bg-blue-500 text-white inline-flex items-center justify-center px-8 py-2'>
                About Us
              </div>
              <div className='rounded-lg transition duration-200 w-1/4 border-2 border-blue-500 border-solid hover:bg-gray-800 hover:text-blue-500 bg-blue-500 text-white inline-flex items-center justify-center px-8 py-2'>
                Capabilities
              </div>
              <div className='rounded-lg transition duration-200 w-1/4 border-2 border-blue-500 border-solid hover:bg-gray-800 hover:text-blue-500 bg-blue-500 text-white inline-flex items-center justify-center px-8 py-2'>
                Contact Us
              </div>
            </div>

          </div>
        </div>
      </Layout>
    </>
  )
}
