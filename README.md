JS-YAML - YAML 1.2 parser / writer for JavaScript
=================================================

## Introduction

This is a fork of [js-yaml](https://github.com/nodeca/js-yaml), containing a few changes to make it work with the modern javascript ecosystem.

## Changes

1. Remove the `js-yaml` global cli, as it is not needed.
2. Migrate all code to esm, so it can be well tree-shaken.
3. Build for esm and cjs, no umd, if you want umd build, just import from the original package.
4. Add TypeScript typings, now you don't need to install `@types/js-yaml` anymore.
5. Quite smaller package size, shrink the package size from 0.5MB to 0.1MB.

## Installation

```bash
npm install @akrc/yaml
```
