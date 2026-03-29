'use client';

import Accordion from '@/components/ui/Accordion';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
  isHighlight?: boolean;
}

interface AccordionWrapperProps {
  items: AccordionItem[];
  type: 'software' | 'webdesign' | 'analytics' | 'transform';
}

export default function AccordionWrapper({ items, type }: AccordionWrapperProps) {
  return <Accordion items={items} type={type} />;
}
