# Contributing Guide

This project uses [Conventional Commits](https://www.conventionalcommits.org/) together with [release-please](https://github.com/googleapis/release-please) to automate versioning and changelog generation.

## Commit messages

All commits **must** follow the Conventional Commits specification:

- `feat:` – a new feature
- `fix:` – a bug fix
- `docs:` – documentation only changes
- `chore:` – changes that do not affect the code (build, tooling, CI)
- `refactor:` – code changes that neither fix a bug nor add a feature

### Examples
```bash
feat: add React-specific ESLint config
fix: correct TypeScript import sorting rules
docs: update installation instructions in README
chore: bump dependencies
