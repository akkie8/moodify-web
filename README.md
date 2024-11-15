# NextJS Starter Template

A simple Next.js application with authentication and dashboard features.

## Getting Started

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/                  # App router
├── components/          # Reusable components
│   ├── providers/      # Context providers
│   └── ui/            # UI components
└── lib/               # Utility functions, types
```

### Naming Conventions

- **Folders**: kebab-case

  ```
  components/ui/
  ```

- **React Components**: PascalCase

  ```
  Button.tsx
  AuthProvider.tsx
  ```

- **Pages**: kebab-case

  ```
  page.tsx
  layout.tsx
  ```

- **Utilities**: camelCase

  ```
  utils.ts
  types.ts
  ```

- **API Routes**: kebab-case
  ```
  route.ts
  ```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub repository](https://github.com/vercel/next.js)
