import React, { useRef } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Products from '../components/Products';
import Services from '../components/Services';
import Showcase from '../components/Showcase';
import RequestCard from '../components/RequestCard';
import Contacts from '../components/Contacts';
import Request from '../components/Request';

const HomePage: React.FC = () => {
  const productsRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const contactsRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Header productsRef={productsRef} servicesRef={servicesRef} showcaseRef={showcaseRef} contactsRef={contactsRef} requestRef={requestRef} />
      <Hero requestRef={requestRef} />
      <div ref={productsRef}><Products /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={showcaseRef}><Showcase /></div>
      <RequestCard requestRef={requestRef} />
      <div ref={contactsRef}><Contacts /></div>
      <div ref={requestRef}><Request /></div>
      <div className='mx-auto max-w-[77.625rem] mb-[1.25rem]'>
        <a className='text-[#92959C] leading-[1.55rem] ml-[3.5625rem]' href='#'>Политика конфидециальности</a>
      </div>
    </>
  );
}

export default HomePage;
