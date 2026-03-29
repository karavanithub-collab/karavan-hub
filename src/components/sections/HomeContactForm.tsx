'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function HomeContactForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
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
        body: JSON.stringify({
          firstName: formData.name,
          lastName: '',
          email: formData.email,
          interest: 'general-inquiry',
          message: formData.message,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="cta-form bg-white p-7 lg:p-10 rounded-[20px] shadow-[0_24px_64px_rgba(0,0,0,0.08)] border border-[var(--border-light)]">
      {isSuccess && (
        <div className="mb-5 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-sm font-medium text-green-900">Got it. We're on it.</p>
          <p className="text-xs text-green-700 mt-0.5">You'll hear from a real person within 24 hours.</p>
        </div>
      )}
      {submitError && (
        <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm font-medium text-red-900">{submitError}</p>
        </div>
      )}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="home-name" className="block text-sm font-medium mb-1.5 text-[var(--text-dark)]">
            Name
          </label>
          <input
            id="home-name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            className={`w-full px-4 py-3.5 border rounded-lg font-body text-[15px] transition-all duration-250 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_var(--primary-light)] ${errors.name ? 'border-red-400' : 'border-[var(--border-light)]'}`}
          />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="home-email" className="block text-sm font-medium mb-1.5 text-[var(--text-dark)]">
            Email
          </label>
          <input
            id="home-email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            className={`w-full px-4 py-3.5 border rounded-lg font-body text-[15px] transition-all duration-250 focus:outline-none focus:border-[var(--primary)] focus:shadow-[0_0_0_3px_var(--primary-light)] ${errors.email ? 'border-red-400' : 'border-[var(--border-light)]'}`}
          />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="home-message" className="block text-sm font-medium mb-1.5 text-[var(--text-dark)]">
            What&apos;s on your mind?
          </label>
          <textarea
            id="home-message"
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
          className="w-full bg-[var(--primary)] text-white py-4 border-none rounded-lg font-body text-[15px] font-semibold cursor-pointer transition-all duration-250 mt-2 hover:bg-[var(--primary-dark)] hover:-translate-y-0.5 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Get a Free Assessment'}
        </button>
      </form>
    </div>
  );
}
