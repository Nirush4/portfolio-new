import { z } from 'zod';

export const createContactSchema = (lang: 'NO' | 'EN') => {
  const isNo = lang === 'NO';
  return z.object({
    name: z
      .string()
      .min(1, isNo ? 'Navn er påkrevd' : 'Name is required')
      .max(50, isNo ? 'Navnet er for langt' : 'Name is too long'),
    email: z
      .string()
      .min(1, isNo ? 'E-post er påkrevd' : 'Email is required')
      .email(isNo ? 'Ugyldig e-postadresse' : 'Invalid email address'),
    message: z
      .string()
      .min(1, isNo ? 'Melding er påkrevd' : 'Message is required')
      .min(
        10,
        isNo
          ? 'Meldingen må være minst 10 tegn'
          : 'Message must be at least 10 characters'
      ),
  });
};

export type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>;
