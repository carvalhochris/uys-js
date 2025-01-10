# Next.js frontend for Unlock Your Sound, leveraging GraphQL, Headless Wordpress, and Static Generation

[View site](https://unlockyoursound.com/)

## Features

- Command Pallete
- Search
- Music submission form

## Stack

- Next js 14 (pages router)
- Wordpress (headless)
- GraphQL
- Vercel

## Resources used in this project

[This hack](https://www.devtwins.com/blog/wpgraphql-increase-post-limit) allowed me to query all posts and thus have them in the static build.

Hey Meta, a tool for checking meta tags: https://www.heymeta.com/ 

This plugin helped me include Yoast REST objects in GraphQL query: https://github.com/ashhitch/wp-graphql-yoast-seo 

The Wordpress GraphQP Plugin for serving my content to the frontend

## Issues

Please submit via the issue tracker

## PRs

Pull requests welcome

## GraphQL Query to fetch all posts

```
query GetPosts {
  posts(first: 1000) {
    edges {
      node {
        id
        title
        slug
        content
        seo {
          metaDesc
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
}

```

## Build and Deploy

```vercel build && vercel deploy --prebuilt```

## GraphQL Query to get single post by slug

```
query GetPostBySlug($slug: String!) {
    postBy(slug: $slug) {
      id
      title
      slug
      content
      seo {
        metaDesc
      }
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
  }
```


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
