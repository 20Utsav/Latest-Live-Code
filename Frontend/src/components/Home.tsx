import React, { useEffect } from 'react';
import Hero from '../pages/Hero';
import Services from './Services/page';
import Portfolios from '../components/Portfolio/Portfolios';
import Process from '../pages/Process';
import Testimonial from '../pages/Testimonial';
import Achievements from '../pages/Achievements'
import Industries from '../pages/Industries'
import HomeBlog from '../pages/HomeBlog'
import EmailForm from '../pages/EmailForm'

function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <Hero />
      <Services />
      <Achievements />
      <Industries />
      <Portfolios />
      <Process />
      <Testimonial />
      <HomeBlog />
      <EmailForm />
    </>
  );
}

export default Home;