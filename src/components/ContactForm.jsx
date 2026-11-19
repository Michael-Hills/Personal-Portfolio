import { useEffect, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';


const Toast = styled.div`
  position: fixed;
  right: var(--gutter);
  bottom: var(--gutter);
  z-index: 100;
  max-width: min(360px, calc(100vw - 2 * var(--gutter)));
  padding: 14px 18px 14px 20px;
  border-left: 3px solid var(--accent);
  background: var(--ink);
  color: var(--bg);
  font-family: var(--font-mono);
  font-size: 0.8125rem;
  animation: toast-in 0.25s ease-out;

  &.success {
    border-left-color: #3fb27f;
  }

  @keyframes toast-in {
    from {
      transform: translateY(8px);
      opacity: 0;
    }
  }
`;

const FormStyle = styled.form`
  display: grid;
  gap: 28px;

  label {
    display: grid;
    gap: 8px;
  }

  input,
  textarea {
    width: 100%;
    padding: 10px 0;
    border: 0;
    border-bottom: 1px solid var(--rule-strong);
    border-radius: 0;
    background: transparent;
    font-size: 1.125rem;
    transition: border-color 0.15s ease;

    &:hover {
      border-bottom-color: var(--ink-muted);
    }

    &:focus {
      outline: none;
      border-bottom-color: var(--accent);
    }
  }

  textarea {
    min-height: 160px;
    resize: vertical;
  }

  button[type='submit'] {
    justify-self: start;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    min-height: 44px;
    padding: 0 18px;
    border: 1px solid var(--ink);
    background: var(--ink);
    color: var(--bg);
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease;

    &:hover:not(:disabled) {
      background: var(--accent);
      border-color: var(--accent);
      color: var(--on-accent);
    }

    &:disabled {
      opacity: 0.6;
      cursor: wait;
    }
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus('validation');
      return;
    }

    setSending(true);
    try {
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: name,
          email: email,
          title: 'Portfolio Contact Form',
          message: message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  const toastText = {
    success: 'Message sent. Thanks, I’ll get back to you soon.',
    validation: 'Please fill in all fields before sending.',
    error: 'Message failed to send. Please try again or email me directly.',
  };

  return (
    <>
      <FormStyle onSubmit={handleSubmit}>
        <label htmlFor="name">
          <span className="label">Name</span>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label htmlFor="email">
          <span className="label">Email</span>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label htmlFor="message">
          <span className="label">Message</span>
          <textarea id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <button type="submit" disabled={sending}>
          {sending ? 'Sending…' : 'Send message'}
          <span aria-hidden="true">→</span>
        </button>
      </FormStyle>
      {status && (
        <Toast role="status" className={status}>
          {toastText[status]}
        </Toast>
      )}
    </>
  );
}
