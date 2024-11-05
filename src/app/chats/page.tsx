'use client';

import { FaSignalMessenger } from 'react-icons/fa6';

import { NavigationBar } from '@/components/navigation-bar';
import { NewGroup } from '@/components/new-group';
import Image from 'next/image';
import { MobileChatContent } from '@/components/mobile-chat-content';

const ChatPage = () => {
  return (
    <>
      <NavigationBar trigger={<NewGroup />} />
      <div className='hidden md:grid h-full max-w-56 text-center mx-auto place-content-center'>
        {/*<FaSignalMessenger className='mx-auto text-primary-main' size={200} />*/}
        <Image 
          src="/CheForum.gif"
          alt="CheForum"
          height={200}
          width={248}
          style={{borderRadius: '10px'}}
          className='mx-auto text-primary-main'
          unoptimized
        />
        <p className='text-sm mt-5 text-primary-main'>
          Welcome to CheForum! Start a new chat or select an existing
          one to get started.
        </p>
      </div>
      <div className='md:hidden flex flex-col space-y-2'>
        <MobileChatContent />
      </div>
    </>
  );
};

export default ChatPage;
