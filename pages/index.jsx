import Head from 'next/head';
import { Fragment } from 'react';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Services from '../components/Services/Services';
import FAQ from '../components/FAQ/FAQ';
import Contact from '../components/Contact/Contact';
import ContactDetails from '../components/Contact/ContactDetails';

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <About />
      <Services />
      <FAQ />
      <Contact />
      <ContactDetails />
    </Fragment>
  );
}
