'use client';

import { useState } from 'react';
interface AccordionItem {
  title: string;
  content: React.ReactNode;
  isHighlight?: boolean;
}

interface AccordionProps {
  items: AccordionItem[];
  type: 'software' | 'webdesign' | 'analytics' | 'transform' | 'aiautomation' | 'aisoftware' | 'aistrategy';
  defaultOpen?: number;
}

export default function Accordion({ items, type, defaultOpen = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  const baseClasses = {
    container: `${type}-accordion`,
    item: `${type}-accordion-item`,
    header: `${type}-accordion-header`,
    icon: `${type}-accordion-icon`,
    body: `${type}-accordion-body`,
  };

  return (
    <div className={baseClasses.container}>
      {items.map((item, index) => {
        const headerId = `${type}-header-${index}`;
        const panelId = `${type}-panel-${index}`;

        return (
          <div
            key={index}
            className={`${baseClasses.item} ${openIndex === index ? 'active' : ''} ${
              item.isHighlight ? 'accordion-highlight' : ''
            }`}
          >
            <button
              id={headerId}
              className={baseClasses.header}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              aria-expanded={openIndex === index}
              aria-controls={panelId}
            >
              <h4>{item.title}</h4>
              <div className={baseClasses.icon}>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              aria-hidden={openIndex !== index}
              className={baseClasses.body}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
