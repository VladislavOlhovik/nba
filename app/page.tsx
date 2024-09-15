'use client';
import {
  About,
  CraftTeam,
  Form,
  Careers,
  Portfolio,
  Main,
  Mission,
  Services,
  Tools,
  Values,
} from '@/components';

export default function Home() {
  return (
    <main className="bg-cardGradient-100">
      <Main />
      <Services />
      <About />
      <Mission />
      <Values />
      <Portfolio />
      <CraftTeam />
      <Tools />
      <Careers />
      <Form />
    </main>
  );
}
