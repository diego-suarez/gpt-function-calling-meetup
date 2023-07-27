import React from 'react';
import openai from '../images/openai.png';

function CoverPage() {
  return (
    <section className="flex flex-col items-center">
      <h2>GPT Function Calling</h2>
      <img src={openai} alt="Openai" loading="lazy" />
    </section>
  );
}

export default CoverPage;
