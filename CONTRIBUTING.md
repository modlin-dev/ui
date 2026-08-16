# Contributing to Modlin

Thank you for considering contributing to Modlin. Our goal is to build developer tools and products that are **minimal, optimized, secure, usable, and safe**. This document describes the standards and workflow you must follow when contributing.

## Code of Conduct

By participating, you agree to maintain a professional and respectful environment. We follow the [Contributor Covenant 3.0](/CODE_OF_CONDUCT.md) Code of Conduct.

## Principles

- **Minimal**: Code must be simple to read and use.
- **Optimized**: Every line should be efficient and purposeful.
- **Secure**: Functions and branches must be explicit and safe.
- **Usable**: APIs must be intuitive and predictable.
- **Safe**: Code must be tested and reliable across dev and prod.

This principle is called the MOSUS Principle.

## Development Environment

- **Language:** TypeScript, using modern ECMAScript features.
- **Package policy:**
  - Use only the latest stable versions.
  - Avoid unoptimized or unnecessary packages.
  - If a solution does not exist, create a new one-word branded tool or function.

## Naming Conventions

- **Variables:** snake_case
  - Prefer a single word: `hash`, `user_name`, `created_urls`.
  - Never encode type or implementation in the name: `created_urls` not `createdUrlsArray`.
- **Constants:** UPPER_SNAKE_CASE
  - Only for compile-time-known values: `MAX_SIZE`, not runtime config.
- **Functions:** snake_case, **one word when possible**
  - Describe *what* the function returns or does, never *how* it does it.
  - Good: `hash` (hashing a string), `email` (sending/composing email), `format_date`, `sleep`.
  - Bad: `hash_with_sha256` (encodes implementation), `load_model_from_zip` (encodes input format), `create_user_via_api` (encodes mechanism).
  - Two words accepted when one word cannot describe the result: `format_date`, `load_model`, `merge_props`.
- **Classes:** PascalCase
  - Preferably branded (`Resend`, `Volter`).
- **Methods:** camelCase
  - Keep it one word unless for events (`onError`), checks (`isEnabled`), or operations (`getUser`).
- **Types, Interfaces & Namespaces**: PascalCase
  - With clear names.
  - Abbreviations fully uppercase (`WSData`, `APIResponse`).
- **Comments:** Any
  - Only for documentation, not for explaining code.

### React exceptions to the rules above

Because React relies on camelCase for its own APIs and DOM bindings, the following take camelCase even though the general rule calls for snake_case:

| What | Rule | Example |
|---|---|---|
| Component props | camelCase | `className`, `onClick`, `rotationSpeed` |
| `useState` setters | camelCase | `setModel`, `setError` |
| `useRef` refs | camelCase | `groupRef`, `containerRef` |
| Event handlers | camelCase | `handleMouseMove`, `onPress` |

## Code Style

- Use modern, clean syntax.
- Prefer `for (i = 0; i < len; i++)` loops over `for...in`.
- Do not repeat object key calls or function calls. Store results in a local variable.
- Use the `@/` alias for `./src/`.
- Follow a standard file structure:

```
@acme/repo/
├── src/
│   ├── app/
│   ├── components/
│   ├── services/
│   ├── utils/
│   ├── tests/
│   ├── lib/
│   └── index.ts
└── package.json
```

## Accessibility and Standards

- All web code must follow **[a11y standards](https://developer.mozilla.org/en-US/docs/Web/Accessibility)**.
- All web/server code must comply with **[WinterTC (formerly WinterCG) standards](https://wintertc.org/)**.

## Error Handling and Security

- Error handling must be predictable and explicit.
- No hidden or cryptic logic.
- Security checks must be obvious at a glance.

## Testing

- All contributions must include tests written with `bun test`.
- Tests must run in both development and production environments.
- Keep tests minimal, fast, and clear.

## Best Practices

- Simplicity over cleverness.
- Functions must do one thing well.
- Use modern ECMAScript features where they improve clarity.
- Imports must be clean and minimal.

## Contribution Workflow

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/my-feature`.
3. Implement changes following Modlin’s standards.
4. Write or update tests.
5. Run `bun test` to ensure all tests pass.
6. Run `bun run build` to ensure the app builds successfully.
7. Commit changes with a clear message:
   - `feat: description`
   - `add: description`
   - `fix: description`
   - `chore: description`
8. Open a Pull Request against `main`.
9. A maintainer will review your changes.

## Commit Messages

Commit changes with a clear message:
    - `feat: description`
    - `add: description`
    - `fix: description`
    - `chore: description`

## Pull Request Guidelines

- Keep PRs small and focused.
- Write clear descriptions of what is being changed and why.
- Link related issues.
- Ensure all CI checks pass before requesting review.

## Licensing

By contributing, you agree that your contributions will be licensed under the project’s license. See [LICENSE](/LICENSE) for details.
