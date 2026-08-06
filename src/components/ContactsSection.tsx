import { type JSX } from 'react';

export const ContactsSection = (): JSX.Element => {
  return (
    <section id='contacts' className='max-w-5xl mx-auto px-6 py-16'>
      <div className='flex items-center gap-4 w-full max-w-sm mb-12'>
        <h2 className='text-white text-2xl font-medium'>
          <span className='text-[#C778DD]'>#</span>contacts
        </h2>
        <div className='h-[1px] bg-[#C778DD] flex-grow'></div>
      </div>

      <div className='grid md:grid-cols-12 gap-8'>
        <p className='md:col-span-7 text-xs md:text-sm leading-relaxed text-[#ABB2BF]'>
          I'm interested in freelance opportunities. However, if you have other
          request or question, don't hesitate to contact me.
        </p>

        <div className='md:col-span-5 flex justify-start md:justify-end'>
          <div className='border border-[#ABB2BF] p-4 text-xs space-y-3 bg-[#282C34]'>
            <div className='text-white font-medium mb-2'>Message me here</div>
            <div className='flex items-center gap-2 text-[#ABB2BF]'>
              <span>💬</span> <span>!Elias#1234</span>
            </div>
            <div className='flex items-center gap-2 text-[#ABB2BF]'>
              <span>📧</span> <span>elias@elias.me</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
