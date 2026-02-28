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
    answer: 'It depends on your specific situation. And we\'ll tell you honestly either way. AI delivers real value when you have repetitive tasks eating up your team\'s time, or data that nobody has the bandwidth to make sense of. It\'s not the right fit if you\'re looking for a quick fix without clear goals. During our free assessment, we figure out whether AI, traditional IT, or some mix of both makes the most sense.',
    schema: {
      name: 'Is AI actually right for my business?',
      text: 'It depends on your specific situation. AI delivers real value when you have repetitive tasks eating up your team\'s time, or data that nobody has the bandwidth to make sense of. During our free assessment, we figure out whether AI, traditional IT, or some mix of both makes the most sense.'
    }
  },
  {
    id: 'faq-2',
    question: 'What results can I realistically expect from AI?',
    answer: 'Results vary based on your starting point and goals. Anyone who promises specific numbers before understanding your business isn\'t being honest. That said, our clients typically see less time wasted on manual tasks and better use of data they were already sitting on. We build a proof of concept first so you can see the results before committing to anything bigger.',
    schema: {
      name: 'What results can I realistically expect from AI?',
      text: 'Results vary based on your starting point and goals. Anyone who promises specific numbers before understanding your business isn\'t being honest. Our clients typically see less time wasted on manual tasks and better use of data they were already sitting on. We build a proof of concept first so you can see results before committing.'
    }
  },
  {
    id: 'faq-3',
    question: 'How do you keep our data safe when implementing AI?',
    answer: 'Data security is built into every step. We use enterprise-grade encryption and work within your existing security policies. Your data never gets shared with anyone. For sensitive industries, we can deploy AI that runs entirely on your own infrastructure, so nothing ever leaves your hands. We walk you through how your information is handled before any project starts.',
    schema: {
      name: 'How do you keep our data safe when implementing AI?',
      text: 'Data security is built into every step. We use enterprise-grade encryption and work within your existing security policies. Your data never gets shared with anyone. For sensitive industries, we can deploy AI that runs entirely on your own infrastructure.'
    }
  },
  {
    id: 'faq-4',
    question: 'How much does a website cost?',
    answer: 'Costs depend on what you need and how complex it gets. A professional small business website typically ranges from a few thousand dollars to quite a bit more for e-commerce or custom functionality. But the real question is return. A website that turns visitors into paying customers pays for itself. We give you a transparent quote after understanding your goals. And we won\'t recommend features you don\'t need.',
    schema: {
      name: 'How much does a website cost?',
      text: 'Costs depend on what you need and how complex it gets. A professional small business website typically ranges from a few thousand dollars to quite a bit more for e-commerce or custom functionality. We give you a transparent quote after understanding your goals.'
    }
  },
  {
    id: 'faq-5',
    question: 'How long does it take to build a website?',
    answer: 'Most business websites take 4-8 weeks from kickoff to launch. Simpler sites can go faster. Complex e-commerce or custom applications take longer. The biggest variable is usually content and feedback. Projects move fast when you\'re responsive, and slow down when approvals stall. We give you a realistic timeline upfront and keep you in the loop the whole way.',
    schema: {
      name: 'How long does it take to build a website?',
      text: 'Most business websites take 4-8 weeks from kickoff to launch. Simpler sites can go faster. Complex e-commerce or custom applications take longer. The biggest variable is usually content and feedback.'
    }
  },
  {
    id: 'faq-6',
    question: 'Will my website work on mobile and show up on Google?',
    answer: 'Yes. Every website we build is mobile-responsive and optimized for search engines. Mobile-first design and technical SEO are standard, not extras. We handle the fundamentals that help Google find and rank your site: loading speed, proper structure, meta tags, schema markup. For businesses that want to compete for specific keywords, we offer ongoing SEO beyond the initial build.',
    schema: {
      name: 'Will my website work on mobile and show up on Google?',
      text: 'Yes. Every website we build is mobile-responsive and optimized for search engines. Mobile-first design and technical SEO are standard, not extras. We handle loading speed, proper structure, meta tags, schema markup.'
    }
  },
  {
    id: 'faq-7',
    question: 'What does digital transformation actually mean for a small business?',
    answer: 'It means using technology to solve real business problems. Not chasing trends. For small businesses, it usually starts with killing the paper and connecting systems that should\'ve been talking to each other years ago. We focus on changes that save time and cut down on mistakes. No buzzwords. Just practical stuff that makes your day-to-day run smoother.',
    schema: {
      name: 'What does digital transformation actually mean for a small business?',
      text: 'It means using technology to solve real business problems. Not chasing trends. For small businesses, it usually starts with killing the paper and connecting systems that should\'ve been talking to each other years ago.'
    }
  },
  {
    id: 'faq-8',
    question: 'Can you build custom software or help us understand our data better?',
    answer: 'Yes to both. We build custom software when off-the-shelf tools don\'t fit your workflow. Applications built around how your business actually operates, not the other way around. For data analytics, we turn the information you\'re already collecting into something you can actually act on. Dashboards and reports that answer the questions your business is really asking. Both start with understanding what decisions you need to make. Then we build the tools to support them.',
    schema: {
      name: 'Can you build custom software or help us understand our data better?',
      text: 'Yes to both. We build custom software when off-the-shelf tools don\'t fit your workflow. For data analytics, we turn the information you\'re already collecting into something you can actually act on. Dashboards and reports that answer the questions your business is really asking.'
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
            className="inline-flex items-center gap-2.5 bg-[var(--primary)] text-white px-8 py-4 rounded-lg font-headline text-[15px] font-semibold no-underline transition-all duration-300 hover:bg-[var(--primary-dark)] hover:-translate-y-0.5 shadow-lg"
          >
            Let&apos;s Have a Conversation
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="transition-transform duration-200"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
