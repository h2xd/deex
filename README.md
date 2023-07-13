# deex
Custom Web Application developer tool to allow us to hack ourselfs. Imagine autofilling forms while doing manual testing or flushing data from localStorage without going to the terminal and adding integrations that boost that behaviour.

## Requirements

Install the following tool to get started.

### Node Version Manager

To manage the node version of the project we use NVM.
You can find installation guides in the [official NVM repository](https://github.com/nvm-sh/nvm#installing-and-updating)

```bash
# Install and use project node version
nvm install && nvm use
```

### PNPM

We use PNPM as our package manager to enable the monorepo.

```bash
corepack enable
corepack prepare pnpm@latest --activate
```