import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
const Login = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
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
        <img
          src="https://rb.gy/ulxxee"
          width={150}
          height={150}
          className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        />
        <form action="" className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
            <h1>Sign In</h1>
            <div>
                <label htmlFor="">
                    <input type="email" placeholder="Email"/>
                </label>
                <label htmlFor=""></label>
            </div>
        </form>
    </div>
  )
}

export default Login