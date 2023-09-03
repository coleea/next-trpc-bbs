import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import type { AppType } from 'next/app';
import { trpc } from '../utils/trpc';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useState } from 'react'

const MyApp = ({ Component, pageProps } : AppProps<{
  initialSession: Session
}>) => {

  const [supabaseClient] = useState(() => createPagesBrowserClient())

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      // Property 'initialSession' does not exist on type '{}'.ts(2339)
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  )

};

export default trpc.withTRPC(MyApp);