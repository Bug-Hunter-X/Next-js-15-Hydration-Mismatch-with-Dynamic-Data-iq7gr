# Next.js 15 Hydration Mismatch Bug

This repository demonstrates a common hydration mismatch error in Next.js 15 applications. The error occurs when the client-side rendering of a component differs from the server-side rendering.

## Bug Description
The `about.js` component generates a random number, which is different on the client and server. This mismatch causes a hydration error.

## How to Reproduce
1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to the `/about` page. Observe the error in the console.

## Solution
The solution involves ensuring consistent data between the client and server.  This can be achieved using techniques like data fetching with `getStaticProps` or `getServerSideProps`.  The updated code provides an example of using `getServerSideProps`.

## Contributing
Feel free to open issues or submit pull requests to improve this example.