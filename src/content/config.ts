import { defineCollection, z } from 'astro:content';

// 定义blog集合的schema
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string(),
    pubDate: z.string().optional(),
    updatedDate: z.string().optional(),
    categories: z.string(),
    tags: z.array(z.string()),
    id: z.string(),
    cover: z.string().optional(),
    heroImage: z.string().optional(),
    recommend: z.boolean().optional(),
    top: z.boolean().optional(),
    hide: z.boolean().optional(),
  }),
});

// 导出集合
export const collections = {
  'blog': blogCollection,
};
