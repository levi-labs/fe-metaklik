import zod from 'zod';

export const linkSchema = zod.object({
  original_url: zod
    .string({ message: 'URL is required' })
    .url('Invalid URL')
    .max(2048, 'URL is too long'),
  title: zod
    .string({ message: 'Title is required' })
    .max(255, 'Title is too long'),
  description: zod.string().max(512, 'Description is too long').optional(),
  custom_domain: zod
    .string()
    .min(3, 'Domain is too short')
    .max(253, 'Domain is too long')
    .optional(),
  image_url: zod
    .string()
    .url('Invalid Image URL')
    .max(2048, 'Image URL is too long')
    .optional(),
});
