'use client';

import { FC, ReactNode, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ClerkProvider, useAuth, SignInButton } from '@clerk/clerk-react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import {
  Authenticated,
  ConvexReactClient,
  Unauthenticated,
} from 'convex/react';
import { FaSignalMessenger } from 'react-icons/fa6';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CONVEX_URL = process.env.NEXT_PUBLIC_CONVEX_URL!;
const CLERK_PUBLISHABLE_KEY = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!;

const convex = new ConvexReactClient(CONVEX_URL);

{/*const handRef = useRef(null);*/}

{/*useEffect(() => {
  gsap.to(handRef.current, {
    rotation:20,
    duration: 0.5,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
  });
}, []);*/}

const ConvexClientProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <Authenticated>{children}</Authenticated>
        <Unauthenticated>
          <div className='bg-slate-900 w-svw h-dvh grid place-content-center'>
            <div className='grid place-content-center mb-5'>
            <Image 
              src="/CheForum.gif"
              alt="CheForum"
              height={140}
              width={140}
              style={{borderRadius: '10px'}}
              className='mx-auto text-primary-main'
              unoptimized
            />
            </div>

            <Card className='bg-slate-800 w-[350px] border-none shadow-xl'>
              <CardHeader>
                <CardTitle className='text-white'>Get Started {/*<span ref={handRef}>*/}🚀{/*</span>*/}</CardTitle>
              </CardHeader>
              <CardContent className='text-white'>
                <SignInButton />
              </CardContent>
            </Card>
          </div>
        </Unauthenticated>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;
