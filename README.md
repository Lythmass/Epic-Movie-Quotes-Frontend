
# Epic movies quotes
This repository is created for front-end side of "Epic Movies Quotes" project, where the user can create movies and add famous quotes to them, which will be posted in news feed for other people to see. 
Link to the live version: https://epic-movies.gigig.redberryinternship.ge/

## Table of contents
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Installation](#installation)
* [Resources](#resources)
* [Folder Structure](#folder-structure)

## Features
- Localized for Georgian and English languages
- Updating user's credentials
- Enabled live broadcasting
- Commenting to the quotes
- Liking & Unliking the quotes
- Full CRUD on movies
- Full CRUD on quotes
- Live notifications
- Password resets
- Ability to add multiple emails
- Ability to log in from all emails
- Email verifiction
- Google Authorization
- Responsive for mobile
- Responsive for desktop

## Tech Stack
**Client:** Next, Redux, TypeScript, TailwindCSS, Laravel echo, Pusher, next-i18next

**Server:** Laravel, Sanctum API, Pusher, Spatie Translatable Package, MySQL


## Installation
You can install my project by following instructions:

```bash
    mkdir epic-movies-quotes-front
    cd epic-movies-quotes-front
    git clone https://github.com/RedberryInternship/gigi-epic-movies-quotes-front.git
    npm install
    npm run dev
```


    
## Resources
- [Helvetica Neue](https://freefontsfamily.com/helvetica-neue-font-free/)
- [Figma Design](https://www.figma.com/file/5uMXCg3itJwpzh9cVIK3hA/Movie-Quotes-Bootcamp-assignment?node-id=0%3A1)
- [Commit Rules](https://redberry.gitbook.io/resources/kodisa-da-proektis-shepasebis-kriteriumebi/proektisa-da-kodis-khariskhis-zogadi-kriteriumebi)

## Folder Structure
```bash
├── public
│   ├── assets
│   │   ├── fonts
│   │   └── images
│   ├── locales
│   │   ├── en
│   │   └── ka
├── components
│   └── PageComponents
├── hooks
├── types
├── slices
├── services
└── pages
    └── page

- .eslintrc.json
- .prettierrc.json
- next-i18next.js
- next.config.js
- package-lock.json
- package.json
- postcss.config.js
- README.md
- store.ts
- tailwind.config.js
- tsconfig.json
```

