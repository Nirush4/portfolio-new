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
    <section
      id='contacts'
      className='max-w-6xl mx-auto px-6 py-20 font-mono'
      aria-labelledby='contact-section-heading'
    >
      <div className='flex items-center gap-4 w-full max-w-md mb-12'>
        <h2
          id='contact-section-heading'
          className='text-white text-2xl md:text-3xl font-medium'
        >
          <span className='text-[#C586C0]' aria-hidden='true'>
            #
          </span>
          {lang === 'NO' ? 'kontakt-meg' : 'contact-me'}
        </h2>
        <div
          className='h-[1px] bg-[#C778DD] flex-grow'
          aria-hidden='true'
        ></div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-start'>
        {/* Left Information Card */}
        <div
          style={{
            backgroundColor: 'color-mix(in oklab, #1b1924 95%, transparent)',
          }}
          className='lg:col-span-5 border border-[#30363D] hover:border-[#C586C0] transition-all shadow-xl flex flex-col justify-between overflow-hidden'
        >
          <div
            style={{
              backgroundColor: 'color-mix(in oklab, #0d1117 95%, transparent)',
            }}
            className='px-4 py-3 border-b border-[#30363D] flex items-center justify-between'
          >
            <div className='flex items-center gap-2' aria-hidden='true'>
              <span className='w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80'></span>
              <span className='w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80'></span>
              <span className='w-2.5 h-2.5 rounded-full bg-[#27C93F]/80'></span>
            </div>
            <span className='text-[11px] font-medium tracking-wider text-[#F2CC60] bg-[#21262D] px-2.5 py-0.5 border border-[#30363D] rounded font-sans'>
              availability.tsx
            </span>
          </div>

          <div className='p-6 md:p-8 flex flex-col justify-center space-y-6'>
            <div className='space-y-3 font-sans'>
              <p className='text-white font-bold text-xl md:text-2xl tracking-tight leading-snug'>
                {lang === 'NO'
                  ? 'La oss skape noe sammen'
                  : 'Let’s build something together'}
              </p>
              <p className='text-sm md:text-base text-[#8B949E] leading-relaxed'>
                {lang === 'NO'
                  ? 'Jeg er interessert i nye muligheter som frontend-utvikler eller designer. Har du en spennende forespørsel, et prosjekt, eller ønsker du bare å slå av en prat? Ta gjerne kontakt via skjemaet!'
                  : 'I am interested in new opportunities as a frontend developer or designer. Whether you have an exciting query, a project, or just want to connect, feel free to drop a message using the form!'}
              </p>
            </div>

            <div className='border border-[#30363D] bg-[#0d1117]/60 p-4 rounded space-y-2 font-sans'>
              <div className='flex items-center gap-2 text-xs font-mono text-[#7EE787]'>
                <span
                  className='w-2 h-2 bg-[#7EE787] rounded-full animate-pulse'
                  aria-hidden='true'
                ></span>
                <span>
                  {lang === 'NO'
                    ? 'Status: Klar for nye utfordringer'
                    : 'Status: Open for new opportunities'}
                </span>
              </div>
              <p className='text-xs text-[#8B949E]'>
                {lang === 'NO'
                  ? 'Svarer vanligvis innen 24 timer på virkedager.'
                  : 'Typically responds within 24 hours on business days.'}
              </p>
            </div>
          </div>
        </div>

        {/* Right High-Visibility Form Card */}
        <div
          style={{
            backgroundColor: 'color-mix(in oklab, #1b1924 95%, transparent)',
          }}
          className='lg:col-span-7 border border-[#30363D] shadow-2xl overflow-hidden flex flex-col relative ring-2 ring-[#C586C0]/30'
        >
          <div
            style={{
              backgroundColor: 'color-mix(in oklab, #0d1117 95%, transparent)',
            }}
            className='px-4 py-3 border-b border-[#30363D] flex items-center justify-between pr-24 sm:pr-4'
          >
            <div className='flex items-center gap-2' aria-hidden='true'>
              <span className='w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80'></span>
              <span className='w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80'></span>
              <span className='w-2.5 h-2.5 rounded-full bg-[#27C93F]/80'></span>
            </div>
            <span className='text-[11px] font-medium tracking-wider text-[#F2CC60] bg-[#21262D] px-2.5 py-0.5 border border-[#30363D] rounded font-sans'>
              contact.tsx
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
                  className='block mb-2 text-xs text-[#C9D1D9] uppercase tracking-wider font-mono font-semibold'
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
                  className={`w-full px-4 py-3 text-sm bg-[#0d1117] text-white border rounded outline-none font-sans transition-all shadow-inner ${
                    errors.name
                      ? 'border-[#FF5F56] ring-1 ring-[#FF5F56]'
                      : 'border-[#30363D] hover:border-[#C586C0]/50 focus:border-[#C586C0] focus:ring-1 focus:ring-[#C586C0]'
                  }`}
                  placeholder={lang === 'NO' ? 'Ola Nordmann' : 'John Doe'}
                />
                {errors.name && (
                  <p
                    className='mt-1 text-xs text-[#FF5F56] font-sans'
                    role='alert'
                  >
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='contact-email'
                  className='block mb-2 text-xs text-[#C9D1D9] uppercase tracking-wider font-mono font-semibold'
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
                  className={`w-full px-4 py-3 text-sm bg-[#0d1117] text-white border rounded outline-none font-sans transition-all shadow-inner ${
                    errors.email
                      ? 'border-[#FF5F56] ring-1 ring-[#FF5F56]'
                      : 'border-[#30363D] hover:border-[#C586C0]/50 focus:border-[#C586C0] focus:ring-1 focus:ring-[#C586C0]'
                  }`}
                  placeholder='you@example.com'
                />
                {errors.email && (
                  <p
                    className='mt-1 text-xs text-[#FF5F56] font-sans'
                    role='alert'
                  >
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor='contact-message'
                  className='block mb-2 text-xs text-[#C9D1D9] uppercase tracking-wider font-mono font-semibold'
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
                  className={`w-full px-4 py-3 text-sm bg-[#0d1117] text-white border rounded outline-none font-sans transition-all resize-none shadow-inner ${
                    errors.message
                      ? 'border-[#FF5F56] ring-1 ring-[#FF5F56]'
                      : 'border-[#30363D] hover:border-[#C586C0]/50 focus:border-[#C586C0] focus:ring-1 focus:ring-[#C586C0]'
                  }`}
                  placeholder={
                    lang === 'NO'
                      ? 'Skriv din melding her...'
                      : 'Write your message here...'
                  }
                />
                {errors.message && (
                  <p
                    className='mt-1 text-xs text-[#FF5F56] font-sans'
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
                className='w-full py-3 px-4 border border-[#C586C0] bg-[#C586C0] text-[#0D1117] text-sm font-bold font-sans hover:bg-[#c586c0d9] hover:text-white transition-all flex items-center justify-center gap-2 rounded shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-[#C586C0] focus:ring-offset-2 focus:ring-offset-[#1b1924]'
                aria-label={lang === 'NO' ? 'Send melding' : 'Send message'}
              >
                {isSubmitting ? (
                  <span>
                    {lang === 'NO' ? 'Sender melding...' : 'Sending message...'}
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
                  className={`mt-4 text-xs md:text-sm p-3 font-mono border text-center rounded ${
                    statusType === 'success'
                      ? 'bg-[#27C93F]/10 text-[#7EE787] border-[#27C93F]/40'
                      : statusType === 'error'
                      ? 'bg-[#FF5F56]/10 text-[#FF5F56] border-[#FF5F56]/40'
                      : 'bg-[#79C0FF]/10 text-[#79C0FF] border-[#79C0FF]/40'
                  }`}
                >
                  {resultMessage}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
