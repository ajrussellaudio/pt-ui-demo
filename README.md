# Turborepo & Next.js & Sass & Storybook

This is a demo of several apps in a monorepo with a shared UI library, TS config and ESLint config.

## Uses

- [Turborepo](https://turbo.build/)
- [Next.js](https://nextjs.org/)
- [Sass](https://sass-lang.com/)
- [Storybook](https://storybook.js.org/)

## ...wtf?

The repo contains two main apps, `teacher-dashboard` built with Next's pages router, and `catalogue` built with Next's newer app router. Each app runs on its own port locally.

Both apps depend on a `<Button />` component defined in `packages/ui`, built with Sass and exported as a TypeScript module.

The repo also contains a Storybook which uses the Vite builder, which also pulls in the `<Button />` component.

## Cool! How's it work?

The build scripts are handled by Turborepo. From the project root call:

```bash
$ yarn dev
```

...and all the packages are built. It's equivalent to calling `yarn dev` in each app or package, but Turborepo handles everything, including caching apps/packages which have not changed since the last build.

The packages (e.g. `ui`) are added to each app's (`dev`)`dependencies` and are available as if they were an NPM package.

The Next apps use Next's build process and dev server. The Storybook is configured to use Vite's build process and dev server. The UI library uses Rollup with a config [adapted from this article](https://storybook.js.org/) and exports type-safe components that can be imported just as you'd expect:

```ts
import { Button } from "@repo/ui";
```

(The `@repo` scope points to _this_ repo)

## Total baller! What else can it do?

What else do you need? :)

Anything shared by two or more apps can be added to `packages`, not just UI and config. For example, an API client to fetch from defined endpoints, with type safety on the response data!

## Sick. Can we deploy this?

Deployment on Vercel is easy. Turborepo is a Vercel product and it works with the platform fairly seamlessly.

In general, Turborepo is only a build system and doesn't care about deployment. Anything that can run the apps (Next.js in this case) can run it from Turborepo. The CI/CD pipeline would be configured to run a build step for a single app and its dependencies, e.g:

```bash
$ yarn turbo build --filter=teacher-dashboard
```

...would build only the `teacher-dashboard` app and its internal dependencies (`ui`, `typescript-config`...).

The Turborepo docs contain recipes for [GitHub Actions](https://turbo.build/repo/docs/ci/github-actions) and other CI/CD systems. AWS Amplify has [support for monorepos](https://storybook.js.org/).

But really, some insight from our infrastructure homies is needed.
