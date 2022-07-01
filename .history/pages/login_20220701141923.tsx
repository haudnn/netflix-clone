import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
const Login = () => {
  return (
    <div>
        <Head>
            <title>Netflix</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Image
            src="https://rb.gy/p2hphi"
            layout="fill"
            className="-z-10 !hidden opacity-60 sm:!inline"
            objectFit="cover"
        >
        </Image>
    </div>
  )
}

export default Login