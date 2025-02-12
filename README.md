# Profile Blink

A proof-of-concept project showcasing [Blinks technology](https://github.com/dialectlabs) from [Dialect Labs](https://dialect.to). This project demonstrates how to create a simple web application that renders a Blink containing links to a person's external profiles and social media presence.

## Overview

This project serves as an experimental implementation of Blinks, allowing users to:

- View a Blink containing multiple profile links
- Access external profiles through the Blink interface
- Experience a modern, Next.js-powered web application

## Getting Started

First, clone the repository:

```bash
git clone https://github.com/bjoerndotsol/blinkprofile.git
cd profile-blink
```

Install the dependencies:

```bash
npm install
# or
yarn install
```

Create a `.env.local` file with your environment variables:

```bash
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Technology Stack

- [Next.js](https://nextjs.org) - React framework for the frontend
- [Blinks](https://github.com/dialectlabs) - Dialect Labs' technology for creating blockchain links (Blinks)
- [TypeScript](https://www.typescriptlang.org/) - For type-safe code
- [Solana](https://solana.com) - For WalletAdapter and types

## Next steps

Checkout (Dialect's documentation)[https://docs.dialect.to] to learn more about blinks.

## Contributing

This is an open-source proof of concept. Feel free to:

- Submit issues for bugs or feature requests
- Create pull requests to improve the codebase
- Fork the project for your own experiments

## License

[MIT License](LICENSE) - Feel free to use this code for your own projects

## Acknowledgments

Special thanks to Dialect Labs for creating the Blinks technology that makes this project possible.
