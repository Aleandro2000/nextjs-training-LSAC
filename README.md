# NextJS Training

Next.js este un cadru de dezvoltare open-source construit pe Node.js, care permite funcționalități de aplicații web bazate pe React, cum ar fi randarea pe server și generarea de site-uri web statice.

## Setup
```` 
npx create-next-app@latest

sau

yarn create next-app
````

## Basic Feauters and Specific for NextJS

### Paginile

În Next.js, o pagină este o componentă React exportată dintr-un fișier .js, .jsx, .ts sau .tsx din directorul de pagini. Fiecare pagină este asociată cu o rută pe baza numelui său de fișier.

Exemplu: dacă creați pagini/about.js care exportă o componentă React ca mai jos, aceasta va fi accesibilă la /about.

````
function About() {
  return <div>About</div>
}

export default About
````

### Pagini cu Rute Dinamice

Next.js acceptă pagini cu rute dinamice. De exemplu, dacă creați un fișier numit pages/posts/[id].js, atunci acesta va fi accesibil la posts/1, posts/2 etc.

Mai multe detalii legate de implementare: https://nextjs.org/docs/api-routes/introduction

### Link-uri aditionale

js-cookie: https://www.npmjs.com/package/js-cookie
Formik: https://formik.org/docs/overview
Redux: https://redux.js.org/