import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      className="pt-[90px] md:pt-[100px] pb-3 bg-white border-b border-gray-200"
      aria-label="Breadcrumb"
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-6 md:px-8 lg:px-10">
        <ol className="flex items-center flex-wrap gap-x-1.5 gap-y-1 text-[13px] leading-none">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
                {index > 0 && (
                  <span className="text-gray-400 select-none" aria-hidden="true">›</span>
                )}
                {isLast || !item.href ? (
                  <span
                    className="text-[var(--text-dark)] font-medium truncate max-w-[200px] sm:max-w-none"
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors duration-150"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
