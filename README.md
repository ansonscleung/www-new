# Anson S.C. Leung - Personal Website

This repository contains my personal website built with Gatsby, TypeScript, and Bulma.

## Local development

```bash
yarn install
yarn develop
```

Visit `http://localhost:8000`.

## Content locations

- Profile and links: `gatsby-config.ts`
- Experiences: `src/data/experiences.json`
- Projects: `src/data/projects.json`
- Identity cards: `src/data/identities.json`
- Main page sections: `src/components/*` and `src/pages/index.tsx`

## Update workflow

1. Update JSON content files in `src/data`.
2. Update social links in `gatsby-config.ts` when needed.
3. Run `yarn develop` and verify layout and copy.
4. Commit with a focused message.
