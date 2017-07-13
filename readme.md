# Simple Theme for Drupal with Pattern Lab

## Prerequisites

- Node v6+
- Php v5.4+
- `composer` installed

## Setup

```bash
npm install
```

Please ensure the Drupal module [Component Libraries](http://drupal.org/project/components) is installed.

## Commands

Compile everything, kick off file watches, and then a local server:

```bash
npm start
```

Compile everything:

```bash
npm run compile
```

Test everything:

```bash
npm test
```

*Note: tests must be enabled, and most are off by default*

## Orientation

- `pattern-lab/`
  - `source/`
    - `_patterns/` - Everything shown in Pattern Lab: contains Atoms, Molecules, etc folders.
    - `_data/` - Global data available to Pattern Lab
- `templates/` - Drupal template files that can include stuff from the above `_patterns/` folder

