import { useState, type JSX } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  createContactSchema,
  type ContactFormData,
} from '../types/contactValidation';

interface ContactSectionProps {
  lang: 'NO' | 'EN';
}

interface Web3FormsResponse {
  success: boolean;
  message: string;
  data?: Record<string, string>;
}

export const ContactSection = ({ lang }: ContactSectionProps): JSX.Element => {
  const [resultMessage, setResultMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusType, setStatusType] = useState<'info' | 'success' | 'error'>(
    'info'
  );

  const contactSchema = createContactSchema(lang);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setResultMessage(lang === 'NO' ? 'Vennligst vent...' : 'Please wait...');
    setStatusType('info');

    const formValues: Record<string, string> = {
      access_key: import.meta.env.VITE_WEB3FORMS_KEY,
      subject: 'New Portfolio Contact Message from Nirushan Portfolio',
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      const responseData: Web3FormsResponse = await res.json();

      if (responseData.success) {
        setResultMessage(
          responseData.message ||
            (lang === 'NO'
              ? 'Melding sendt vellykket!'
              : 'Message sent successfully!')
        );
        setStatusType('success');
        reset();
      } else {
        setResultMessage(
          responseData.message ||
            (lang === 'NO' ? 'Noe gikk galt!' : 'Something went wrong!')
        );
        setStatusType('error');
      }
    } catch (err: unknown) {
      setResultMessage(
        err instanceof Error
          ? err.message
          : lang === 'NO'
          ? 'Noe gikk galt!'
          : 'Something went wrong!'
      );
      setStatusType('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResultMessage(''), 5000);
    }
  };

  return (
    <div
      id='contacts'
      className='relative w-full font-mono overflow-hidden bg-[#0B1220]'
    >
      <section
        className='bg-[#0B1220] py-16 px-6 text-[#8F9BAE] relative z-10'
        aria-labelledby='contact-section-heading'
      >
        <div className='max-w-6xl mx-auto'>
          <div className='flex items-center gap-4 w-full max-w-md mb-12'>
            <h2
              id='contact-section-heading'
              className='text-white text-2xl md:text-4xl font-black uppercase tracking-tight'
            >
              <span
                className='text-[rgb(237,242,81)] bg-[#0C121E] border border-[#1E293B] px-2 py-0.5 mr-2'
                aria-hidden='true'
              >
                #
              </span>
              {lang === 'NO' ? 'kontakt-meg' : 'contact-me'}
            </h2>
            <div
              className='h-[2px] bg-[#1E293B] flex-grow'
              aria-hidden='true'
            ></div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
            <div className='lg:col-span-5 bg-[#121A2C] border border-[#1E293B] hover:border-[rgb(237,242,81)]/80 transition-all rounded-none shadow-xl flex flex-col justify-between overflow-hidden'>
              <div className='px-4 py-3 bg-[#0C121E] border-b border-[#1E293B] flex items-center justify-between'>
                <div className='flex items-center gap-2' aria-hidden='true'>
                  <span className='w-2.5 h-2.5 bg-[#FF5F56]/80'></span>
                  <span className='w-2.5 h-2.5 bg-[#FFBD2E]/80'></span>
                  <span className='w-2.5 h-2.5 bg-[#27C93F]/80'></span>
                </div>
                <span className='text-[10px] lowercase font-bold tracking-widest text-[rgb(237,242,81)] bg-[#0C121E] px-2.5 py-0.5 rounded-none border border-[#1E293B] font-mono'>
                  {lang === 'NO' ? 'tilgjengelighet.tsx' : 'availability.tsx'}
                </span>
              </div>

              <div className='p-6 md:p-8 flex flex-col justify-center space-y-6'>
                <div className='space-y-3 font-sans'>
                  <p className='text-white font-bold text-xl md:text-2xl tracking-tight leading-snug'>
                    {lang === 'NO'
                      ? 'La oss skape noe sammen'
                      : 'Let’s build something together'}
                  </p>
                  <p className='text-xs md:text-sm text-[#8F9BAE] leading-relaxed'>
                    {lang === 'NO'
                      ? 'Jeg er interessert i nye muligheter som frontend-utvikler eller designer. Har du en spennende forespørsel, et prosjekt, eller ønsker du bare å slå av en prat? Ta gjerne kontakt via skjemaet!'
                      : 'I am interested in new opportunities as a frontend developer or designer. Whether you have an exciting query, a project, or just want to connect, feel free to drop a message using the form!'}
                  </p>
                </div>

                <div className='border border-[#1E293B] bg-[#0C121E] p-4 rounded-none space-y-2 font-mono'>
                  <div className='flex items-center gap-2 text-xs text-[rgb(237,242,81)] font-bold'>
                    <span
                      className='w-2 h-2 bg-[rgb(237,242,81)] rounded-full animate-pulse'
                      aria-hidden='true'
                    ></span>
                    <span>
                      {lang === 'NO'
                        ? 'Status: Klar for nye utfordringer'
                        : 'Status: Open for new opportunities'}
                    </span>
                  </div>
                  <p className='text-xs text-[#8F9BAE] font-sans'>
                    {lang === 'NO'
                      ? 'Svarer vanligvis innen 24 timer på virkedager.'
                      : 'Typically responds within 24 hours on business days.'}
                  </p>
                </div>
              </div>
            </div>

            <div className='lg:col-span-7 bg-[#121A2C] border border-[#1E293B] rounded-none shadow-xl overflow-hidden flex flex-col relative'>
              <div className='px-4 py-3 bg-[#0C121E] border-b border-[#1E293B] flex items-center justify-between'>
                <div className='flex items-center gap-2' aria-hidden='true'>
                  <span className='w-2.5 h-2.5 bg-[#FF5F56]/80'></span>
                  <span className='w-2.5 h-2.5 bg-[#FFBD2E]/80'></span>
                  <span className='w-2.5 h-2.5 bg-[#27C93F]/80'></span>
                </div>
                <span className='text-[10px] lowercase font-bold tracking-widest text-[rgb(237,242,81)] bg-[#0C121E] px-2.5 py-0.5 rounded-none border border-[#1E293B] font-mono'>
                  {lang === 'NO' ? 'kontakt.tsx' : 'contact.tsx'}
                </span>
              </div>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className='p-6 md:p-8 space-y-5 flex-grow flex flex-col justify-between'
                noValidate
              >
                <div className='space-y-4'>
                  <div>
                    <label
                      htmlFor='contact-name'
                      className='block mb-2 text-xs text-white uppercase tracking-wider font-mono font-bold'
                    >
                      {lang === 'NO' ? 'Navn' : 'Name'}{' '}
                      <span className='text-[#FF5F56]' aria-hidden='true'>
                        *
                      </span>
                    </label>
                    <input
                      id='contact-name'
                      type='text'
                      aria-required='true'
                      aria-invalid={errors.name ? 'true' : 'false'}
                      {...register('name')}
                      className={`w-full px-4 py-3 text-xs md:text-sm font-mono text-white bg-[#0C121E] border rounded-none outline-none transition-colors placeholder-[#8F9BAE]/50 ${
                        errors.name
                          ? 'border-[#FF5F56] ring-1 ring-[#FF5F56]'
                          : 'border-[#1E293B] focus:border-[rgb(237,242,81)]'
                      }`}
                      placeholder={lang === 'NO' ? 'Ola Nordmann' : 'John Doe'}
                    />
                    {errors.name && (
                      <p
                        className='mt-1 text-xs text-[#FF5F56] font-mono'
                        role='alert'
                      >
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='contact-email'
                      className='block mb-2 text-xs text-white uppercase tracking-wider font-mono font-bold'
                    >
                      E-post{' '}
                      <span className='text-[#FF5F56]' aria-hidden='true'>
                        *
                      </span>
                    </label>
                    <input
                      id='contact-email'
                      type='email'
                      aria-required='true'
                      aria-invalid={errors.email ? 'true' : 'false'}
                      {...register('email')}
                      className={`w-full px-4 py-3 text-xs md:text-sm font-mono text-white bg-[#0C121E] border rounded-none outline-none transition-colors placeholder-[#8F9BAE]/50 ${
                        errors.email
                          ? 'border-[#FF5F56] ring-1 ring-[#FF5F56]'
                          : 'border-[#1E293B] focus:border-[rgb(237,242,81)]'
                      }`}
                      placeholder='you@example.com'
                    />
                    {errors.email && (
                      <p
                        className='mt-1 text-xs text-[#FF5F56] font-mono'
                        role='alert'
                      >
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor='contact-message'
                      className='block mb-2 text-xs text-white uppercase tracking-wider font-mono font-bold'
                    >
                      {lang === 'NO' ? 'Melding' : 'Message'}{' '}
                      <span className='text-[#FF5F56]' aria-hidden='true'>
                        *
                      </span>
                    </label>
                    <textarea
                      id='contact-message'
                      rows={4}
                      aria-required='true'
                      aria-invalid={errors.message ? 'true' : 'false'}
                      {...register('message')}
                      className={`w-full px-4 py-3 text-xs md:text-sm font-mono text-white bg-[#0C121E] border rounded-none outline-none transition-colors resize-none placeholder-[#8F9BAE]/50 ${
                        errors.message
                          ? 'border-[#FF5F56] ring-1 ring-[#FF5F56]'
                          : 'border-[#1E293B] focus:border-[rgb(237,242,81)]'
                      }`}
                      placeholder={
                        lang === 'NO'
                          ? 'Skriv din melding her...'
                          : 'Write your message here...'
                      }
                    />
                    {errors.message && (
                      <p
                        className='mt-1 text-xs text-[#FF5F56] font-mono'
                        role='alert'
                      >
                        {errors.message.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className='pt-3'>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className='w-full py-3 px-6 bg-[rgb(237,242,81)] text-[#0C121E] font-bold border-2 border-[#0C121E] text-xs font-mono rounded-none shadow-[3px_3px_0px_0px_rgba(12,18,30,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(12,18,30,1)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#0C121E]'
                    aria-label={lang === 'NO' ? 'Send melding' : 'Send message'}
                  >
                    {isSubmitting ? (
                      <span>
                        {lang === 'NO'
                          ? 'Sender melding...'
                          : 'Sending message...'}
                      </span>
                    ) : (
                      <>
                        <span>
                          {lang === 'NO' ? 'Send melding' : 'Send Message'}
                        </span>
                        <span className='font-mono'>~~&gt;</span>
                      </>
                    )}
                  </button>

                  {resultMessage && (
                    <div
                      role='status'
                      aria-live='polite'
                      className={`mt-4 text-xs font-mono p-3 border text-center rounded-none ${
                        statusType === 'success'
                          ? 'bg-[#0C121E] text-[rgb(237,242,81)] border-[rgb(237,242,81)]'
                          : statusType === 'error'
                          ? 'bg-[#0C121E] text-[#FF5F56] border-[#FF5F56]'
                          : 'bg-[#0C121E] text-white border-[#1E293B]'
                      }`}
                    >
                      {resultMessage}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
