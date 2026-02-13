'use client';

import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  schema: {
    name: string;
    text: string;
  };
}

const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Is AI actually right for my business?',
    answer: 'It depends on your specific situation—and we\'ll tell you honestly either way. AI delivers real value when you have repetitive tasks eating up employee time, data that needs organizing or analyzing, or customer interactions that could be faster. It\'s not the right fit if you\'re looking for a quick fix without clear goals. During our free assessment, we\'ll identify whether AI, traditional IT solutions, or a combination makes the most sense for your business.',
    schema: {
      name: 'Is AI actually right for my business?',
      text: 'It depends on your specific situation. AI delivers real value when you have repetitive tasks eating up employee time, data that needs organizing or analyzing, or customer interactions that could be faster. During a free assessment, we identify whether AI, traditional IT solutions, or a combination makes the most sense for your business.'
    }
  },
  {
    id: 'faq-2',
    question: 'What results can I realistically expect from AI?',
    answer: 'Results vary based on your starting point and goals—anyone promising specific numbers before understanding your business isn\'t being honest. That said, our clients typically see measurable improvements in three areas: time savings on manual tasks, faster response times to customers, and better insights from their existing data. We build a proof of concept first so you can validate results before committing to a larger investment.',
    schema: {
      name: 'What results can I realistically expect from AI?',
      text: 'Results vary based on your starting point and goals. Clients typically see measurable improvements in time savings on manual tasks, faster response times to customers, and better insights from existing data. We build a proof of concept first so you can validate results before committing to a larger investment.'
    }
  },
  {
    id: 'faq-3',
    question: 'How do you keep our data safe when implementing AI?',
    answer: 'Data security is built into every step of our process. We use enterprise-grade encryption, work within your existing security policies, and never share your data with third parties. For sensitive industries, we can deploy AI solutions that run entirely within your own infrastructure—your data never leaves your control. We\'ll walk you through exactly how your information is handled before any project begins.',
    schema: {
      name: 'How do you keep our data safe when implementing AI?',
      text: 'Data security is built into every step of our process. We use enterprise-grade encryption, work within your existing security policies, and never share your data with third parties. For sensitive industries, we can deploy AI solutions that run entirely within your own infrastructure.'
    }
  },
  {
    id: 'faq-4',
    question: 'How much does a website cost?',
    answer: 'Website costs depend on complexity, features, and your specific business needs. A professional small business website typically ranges from a few thousand dollars to significantly more for e-commerce or custom functionality. The real question is ROI—a website that converts visitors into customers pays for itself. We provide transparent quotes after understanding your goals, and we\'ll never recommend features you don\'t actually need.',
    schema: {
      name: 'How much does a website cost?',
      text: 'Website costs depend on complexity, features, and your specific business needs. A professional small business website typically ranges from a few thousand dollars to significantly more for e-commerce or custom functionality. We provide transparent quotes after understanding your goals.'
    }
  },
  {
    id: 'faq-5',
    question: 'How long does it take to build a website?',
    answer: 'Most business websites take 4-8 weeks from kickoff to launch. Simpler sites can be faster; complex e-commerce or custom applications take longer. The biggest variable is usually content and feedback—projects move quickly when you\'re responsive, and slow down when approvals get delayed. We\'ll give you a realistic timeline upfront and keep you updated throughout the process.',
    schema: {
      name: 'How long does it take to build a website?',
      text: 'Most business websites take 4-8 weeks from kickoff to launch. Simpler sites can be faster; complex e-commerce or custom applications take longer. The biggest variable is usually content and feedback timing.'
    }
  },
  {
    id: 'faq-6',
    question: 'Will my website work on mobile and show up on Google?',
    answer: 'Yes—every website we build is mobile-responsive and optimized for search engines. Mobile-first design and technical SEO are standard, not add-ons. We handle the fundamentals that help Google find and index your site: fast loading speeds, proper structure, meta tags, and schema markup. For businesses that want to compete for specific keywords, we offer ongoing SEO services beyond the initial build.',
    schema: {
      name: 'Will my website work on mobile and show up on Google?',
      text: 'Yes—every website we build is mobile-responsive and optimized for search engines. Mobile-first design and technical SEO are standard, not add-ons. We handle fast loading speeds, proper structure, meta tags, and schema markup.'
    }
  },
  {
    id: 'faq-7',
    question: 'What does digital transformation actually mean for a small business?',
    answer: 'Digital transformation means using technology to solve real business problems—not chasing trends. For small businesses, it often starts with eliminating paper processes, connecting disconnected systems, or giving your team better tools to serve customers. We focus on changes that save time, reduce errors, and let you scale without adding headcount. No buzzwords, just practical improvements that make your operations run smoother.',
    schema: {
      name: 'What does digital transformation actually mean for a small business?',
      text: 'Digital transformation means using technology to solve real business problems—not chasing trends. For small businesses, it often starts with eliminating paper processes, connecting disconnected systems, or giving your team better tools to serve customers.'
    }
  },
  {
    id: 'faq-8',
    question: 'Can you build custom software or help us understand our data better?',
    answer: 'Yes to both. We build custom software when off-the-shelf tools don\'t fit your workflow—applications tailored to how your business actually operates. For data analytics, we help you turn the information you\'re already collecting into insights you can act on: dashboards, reports, and visualizations that answer your real business questions. Both start with understanding what decisions you\'re trying to make, then building the tools to support them.',
    schema: {
      name: 'Can you build custom software or help us understand our data better?',
      text: 'Yes to both. We build custom software when off-the-shelf tools don\'t fit your workflow. For data analytics, we help you turn the information you\'re already collecting into insights you can act on: dashboards, reports, and visualizations that answer your real business questions.'
    }
  }
];

export function HomeFAQ() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="faq-section bg-white py-[60px] md:py-[80px] lg:py-[120px]">
      <div className="container-main max-w-[800px]">
        <div className="faq-header text-center mb-16">
          <h2 className="font-headline text-2xl md:text-3xl lg:text-[42px] font-medium text-[var(--text-dark)] mb-4 leading-tight tracking-tight">
            Questions you&apos;re probably asking.
          </h2>
          <p className="text-lg text-[var(--text-body)]">
            Honest answers to the things we hear most often.
          </p>
        </div>

        <div className="faq-list flex flex-col border-y border-[var(--border-light)]">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`faq-item border-b border-[var(--border-light)] last:border-b-0 transition-all duration-300 ${
                activeId === item.id ? 'active' : ''
              }`}
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                className="faq-question font-headline text-base lg:text-[17px] font-medium text-[var(--text-dark)] py-5 lg:py-6 cursor-pointer flex justify-between items-center gap-6 transition-colors duration-200 hover:text-[var(--primary)] w-full text-left leading-relaxed disabled:cursor-default disabled:text-[var(--text-dark)]"
                onClick={() => toggleFAQ(item.id)}
                itemProp="name"
                aria-expanded={activeId === item.id}
                aria-controls={`answer-${item.id}`}
              >
                {item.question}
                <span
                  className={`faq-icon relative w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                    activeId === item.id ? 'rotate-90' : ''
                  }`}
                  aria-hidden="true"
                >
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-0.5 bg-current transition-transform duration-300" />
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-3.5 bg-current transition-all duration-300" />
                </span>
              </button>

              <div
                id={`answer-${item.id}`}
                className={`faq-answer overflow-hidden transition-all duration-300 ${
                  activeId === item.id ? 'max-h-[600px]' : 'max-h-0'
                }`}
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <div
                  className="faq-answer-inner pb-6 text-[15px] text-[var(--text-body)] leading-[1.8]"
                  itemProp="text"
                >
                  {item.answer}
                </div>
              </div>

              {/* Schema.org structured data */}
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Question',
                    name: item.schema.name,
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: item.schema.text
                    }
                  })
                }}
              />
            </div>
          ))}
        </div>

        {/* FAQ CTA */}
        <div className="faq-cta mt-12 md:mt-10 text-center">
          <p className="text-lg text-[var(--text-body)] mb-3">
            Have a specific question about your situation?
          </p>
          <a
            href="#contact"
            className="faq-cta-link inline-flex items-center gap-2 font-headline text-lg md:text-base font-medium text-[var(--primary)] no-underline transition-all duration-200 hover:gap-3.5 hover:text-[var(--accent-purple)]"
          >
            Let&apos;s Have a Conversation
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
