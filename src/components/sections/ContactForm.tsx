'use client';

import { useState } from 'react';
const CheckCircle = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);
const Send = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
);

// Custom styles for select dropdown
const selectStyles = `
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  interest: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  interest?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    interest: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select a service';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        interest: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{selectStyles}</style>
      {/* Form Container */}
      <aside
        className="bg-white rounded-3xl shadow-2xl overflow-hidden relative"
        aria-labelledby="form-heading"
      >
        {/* Gradient accent bar at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500" />

        <div className="p-6 sm:p-8 md:p-11">
          {/* Form Header */}
          <div className="text-center mb-8 pb-6 border-b border-slate-100 relative" data-eeat="trust">
            <h2
              id="form-heading"
              className="font-headline text-2xl font-bold text-text-dark mb-1"
              data-speakable="true"
            >
              Start a conversation
            </h2>
            <p className="text-sm text-text-muted">Tell us a bit about your project</p>
          </div>

          {/* Success Message */}
          {isSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-green-900">
                  Message sent successfully!
                </p>
                <p className="text-xs text-green-700">
                  We'll get back to you within 24 hours.
                </p>
              </div>
            </div>
          )}

          {/* Form */}
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* First Name & Last Name Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-0">
                <label htmlFor="firstName" className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                  First name
                </label>
                <div className="relative">
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400 pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Jane"
                    required
                    className={`w-full pl-12 pr-4 py-4 font-body text-sm text-text-dark bg-white border-[1.5px] rounded-2xl outline-none transition-all ${
                      errors.firstName
                        ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-100'
                        : 'border-slate-200 hover:border-slate-300 focus:border-primary focus:ring-4 focus:ring-blue-100'
                    }`}
                    aria-required="true"
                    autoComplete="given-name"
                  />
                </div>
                {errors.firstName && (
                  <p className="text-xs text-red-600 mt-1">{errors.firstName}</p>
                )}
              </div>

              <div className="flex flex-col gap-0">
                <label htmlFor="lastName" className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                  Last name
                </label>
                <div className="relative">
                  <svg
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400 pointer-events-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Smith"
                    required
                    className={`w-full pl-12 pr-4 py-4 font-body text-sm text-text-dark bg-white border-[1.5px] rounded-2xl outline-none transition-all ${
                      errors.lastName
                        ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-100'
                        : 'border-slate-200 hover:border-slate-300 focus:border-primary focus:ring-4 focus:ring-blue-100'
                    }`}
                    aria-required="true"
                    autoComplete="family-name"
                  />
                </div>
                {errors.lastName && (
                  <p className="text-xs text-red-600 mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-0">
              <label htmlFor="email" className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                Email address
              </label>
              <div className="relative">
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-400 pointer-events-none"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@company.com"
                  required
                  className={`w-full pl-12 pr-4 py-4 font-body text-sm text-text-dark bg-white border-[1.5px] rounded-2xl outline-none transition-all ${
                    errors.email
                      ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-100'
                      : 'border-slate-200 hover:border-slate-300 focus:border-primary focus:ring-4 focus:ring-blue-100'
                  }`}
                  aria-required="true"
                  inputMode="email"
                  autoComplete="email"
                />
              </div>
              {errors.email && (
                <p className="text-xs text-red-600 mt-1">{errors.email}</p>
              )}
            </div>

            {/* Interest Select */}
            <div className="flex flex-col gap-0">
              <label htmlFor="interest" className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                What can we help with?
              </label>
              <div className="relative">
                <select
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-4 pr-12 font-body text-sm text-text-dark bg-white border-[1.5px] rounded-2xl outline-none transition-all cursor-pointer appearance-none ${
                    errors.interest
                      ? 'border-red-500 focus:border-red-600 focus:ring-4 focus:ring-red-100'
                      : 'border-slate-200 hover:border-slate-300 focus:border-primary focus:ring-4 focus:ring-blue-100'
                  }`}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23334155' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    backgroundSize: '20px 20px',
                    paddingRight: '40px',
                  }}
                  aria-required="true"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="custom-software">Custom Software Development</option>
                  <option value="web-design">Web Design & Development</option>
                  <option value="data-analytics">Data Analytics & Business Intelligence</option>
                  <option value="ai-automation">AI Integration & Automation</option>
                  <option value="digital-transformation">Digital Transformation Strategy</option>
                  <option value="workflow-optimization">Workflow Optimization</option>
                  <option value="other">Other / Not Sure Yet</option>
                </select>
              </div>
              {errors.interest && (
                <p className="text-xs text-red-600 mt-1">{errors.interest}</p>
              )}
            </div>

            {/* Message Textarea */}
            <div className="flex flex-col gap-0">
              <label htmlFor="message" className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                Your message{' '}
                <span className="font-normal text-slate-500 text-[11px]">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What challenges are you facing? What goals would you like to achieve?"
                rows={4}
                className="w-full px-4 py-4 font-body text-sm text-text-dark bg-white border-[1.5px] border-slate-200 rounded-2xl outline-none transition-all hover:border-slate-300 focus:border-primary focus:ring-4 focus:ring-blue-100"
                aria-describedby="message-hint"
              />
              <span id="message-hint" className="sr-only">
                Describe your project needs, challenges, or goals
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-[18px] px-8 font-headline text-base font-semibold text-white bg-primary hover:bg-primary-dark active:bg-primary-deeper border-none rounded-2xl cursor-pointer flex items-center justify-center gap-2.5 transition-all mt-2 disabled:opacity-70 disabled:cursor-not-allowed hover:enabled:-translate-y-0.5 hover:enabled:shadow-lg"
              aria-label="Send contact form message"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              <Send className="w-[18px] h-[18px]" />
            </button>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mt-5 pt-5 border-t border-slate-100" data-eeat="trust" data-geo-signal="responsiveness">
              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                <svg
                  className="w-3.5 h-3.5 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Free consultation</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                <svg
                  className="w-3.5 h-3.5 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>No commitment</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-600 font-medium">
                <svg
                  className="w-3.5 h-3.5 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>Reply within 24hrs</span>
              </div>
            </div>
          </form>
        </div>
      </aside>
    </>
  );
}
