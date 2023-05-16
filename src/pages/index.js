import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [data, setData] = useState("");

  useEffect(() => {
    fetch('https://backend.argouniverse.com/')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        // Handle the retrieved data
        setData(data);
      })
      .catch(error => {
        // Handle any errors
        console.log('Error:', error);
      });
  }, []); // Empty dependency array to run the effect only once on component mount


  return (
    <>
      <Head>
        <title>Argo Universe Frontend App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <p>
            {data.quote}
            <code className={styles.code}>https://github.com/argo-universe/backend-app</code>
          </p>
          <div>
          
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/argo-universe.png"
            alt="Next.js Logo"
            width={550}
            height={255}
            priority
          />
        </div>
        <p></p>

 
      </main>
    </>
  )
}
