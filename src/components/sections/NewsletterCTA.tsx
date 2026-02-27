'use client';

import { useState } from 'react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!email.trim()) {
      setError('Please enter your email');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      setIsSuccess(true);
      setEmail('');

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="rounded-lg px-6 lg:px-10 py-12 lg:py-16 my-16 lg:my-20 text-center mx-auto" style={{
      backgroundColor: '#1A1A1A',
      maxWidth: '720px',
      marginTop: '64px',
      marginBottom: '64px',
    }}>
      <h3 className="font-serif mb-3" style={{
        fontSize: '28px',
        lineHeight: '1.3',
        fontWeight: '500',
        color: '#FFFFFF',
      }}>
        You're not in this alone
      </h3>
      <p className="font-light mb-7 mx-auto" style={{
        fontSize: '16px',
        lineHeight: '1.85',
        color: '#BDBDBD',
        maxWidth: '100%',
        fontWeight: '300',
      }}>
        Join a growing community of small business owners sharing what actually works—and
        what doesn't.
      </p>

      {isSuccess && (
        <div className="rounded-lg p-4 mb-6 text-sm font-light" style={{
          backgroundColor: 'rgba(74, 222, 128, 0.1)',
          border: '1px solid rgba(74, 222, 128, 0.5)',
          color: '#4ADE80',
        }}>
          Check your email to confirm your subscription!
        </div>
      )}

      {error && (
        <div className="rounded-lg p-4 mb-6 text-sm font-light" style={{
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.5)',
          color: '#FCA5A5',
        }}>
          {error}
        </div>
      )}

      <form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto mb-4" onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-1 px-4 lg:px-5 py-3 lg:py-3.5 font-light text-sm rounded-lg outline-none transition-all whitespace-nowrap"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            color: '#FFFFFF',
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderColor = '#1A5A5A';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
          }}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="px-6 lg:px-7 py-3 lg:py-3.5 font-semibold text-sm rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap text-white"
          style={{
            backgroundColor: '#1A5A5A',
            opacity: isSubmitting ? 0.5 : 1,
          }}
          onMouseEnter={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.backgroundColor = '#0F3D3D';
            }
          }}
          onMouseLeave={(e) => {
            if (!isSubmitting) {
              e.currentTarget.style.backgroundColor = '#1A5A5A';
            }
          }}
        >
          {isSubmitting ? 'Subscribing...' : 'Join us'}
        </button>
      </form>

      <p className="font-geist-mono text-xs" style={{ color: '#808080', fontWeight: '400' }}>
        Weekly insights from real businesses. No spam, ever.
      </p>
    </section>
  );
}
