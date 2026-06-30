'use client';

import { useState } from 'react';

export default function HomepageForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = () => {
    const e: { name?: string; email?: string } = {};
    if (!formData.name.trim()) e.name = 'Name is required';
    if (!formData.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Please enter a valid email';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.error ?? 'Something went wrong. Please try again.');
        return;
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch {
      setSubmitError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = (hasError?: string) =>
    `w-full px-4 py-3.5 border rounded-lg font-body text-[15px] transition-all duration-250 focus:outline-none focus:shadow-[0_0_0_3px_var(--primary-light)] ${
      hasError
        ? 'border-red-400 focus:border-red-500'
        : 'border-[var(--border-light)] focus:border-[var(--primary)]'
    }`;

  if (isSuccess) {
    return (
      <div className="cta-form bg-white p-7 lg:p-10 rounded-[20px] shadow-[0_24px_64px_rgba(0,0,0,0.08)] border border-[var(--border-light)] flex flex-col items-center justify-center gap-4 min-h-[280px] text-center">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <div>
          <p className="font-headline text-lg font-bold text-[var(--text-dark)]">Got it. We're on it.</p>
          <p className="text-sm text-[var(--text-muted)] mt-1">You'll hear from a real person within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cta-form bg-white p-7 lg:p-10 rounded-[20px] shadow-[0_24px_64px_rgba(0,0,0,0.08)] border border-[var(--border-light)]">
      {submitError && (
        <div className="mb-5 p-3.5 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2.5">
          <svg className="w-4.5 h-4.5 text-red-600 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <p className="text-sm text-red-700">{submitError}</p>
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="hp-name" className="block text-sm font-medium mb-1.5 text-[var(--text-dark)]">
            Name
          </label>
          <input
            id="hp-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            autoComplete="name"
            className={inputClass(errors.name)}
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="hp-email" className="block text-sm font-medium mb-1.5 text-[var(--text-dark)]">
            Email
          </label>
          <input
            id="hp-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            autoComplete="email"
            inputMode="email"
            className={inputClass(errors.email)}
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="hp-message" className="block text-sm font-medium mb-1.5 text-[var(--text-dark)]">
            What&apos;s on your mind?
          </label>
          <textarea
            id="hp-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project, challenge, or question..."
            rows={4}
            className="w-full px-4 py-3.5 border border-[var(--border-light)] rounded-lg font-body text-[15px] transition-all duration-250 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_var(--primary-light)] resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[var(--primary)] text-white py-4 border-none rounded-lg font-body text-[15px] font-semibold cursor-pointer transition-all duration-250 mt-2 hover:bg-[var(--primary-dark)] hover:enabled:-translate-y-0.5 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending…' : 'Get a Free Assessment'}
        </button>
      </form>
    </div>
  );
}
