import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'

 

export default function  MyApp({ Component, pageProps }: AppProps)  {

  const [queryClient] = React.useState(() => new QueryClient())



  return (

    <QueryClientProvider client={queryClient}>

      <Hydrate state={(pageProps as any).dehydratedState}>

        <Component {...pageProps} />

      </Hydrate>

    </QueryClientProvider>

  )

}



// function MyApp({ Component, pageProps }: AppProps) {
//   const [queryClient] = React.useState(() => new QueryClient())

//   return (
//   <QueryClientProvider client={queryClient}>
//   <Component {...pageProps} />
//   </QueryClientProvider>
//   )
// }

// export default MyApp


