'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { courses } from '@/data/courses';
import { retreats } from '@/data/retreats';
import { workshops } from '@/data/workshops';
import { site } from '@/data/site';

const interests = [
  { group: 'Teacher training', options: courses.map((c) => [c.slug, c.title]) },
  { group: 'Retreats', options: retreats.map((r) => [r.slug, r.title]) },
  { group: 'Workshops', options: workshops.map((w) => [w.slug, w.title]) },
  {
    group: 'Other',
    options: [
      ['daily-classes', 'Daily drop-in classes'],
      ['wellness', 'Wellness & spa treatments'],
      ['other-course', 'Another course'],
      ['general', 'General question'],
    ],
  },
];
const known = new Set(interests.flatMap((g) => g.options.map(([v]) => v)));

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

// Front-end demo only: validates input and explains that nothing is sent.
export default function ContactForm() {
  const params = useSearchParams();
  const preset = params.get('interest');
  const [values, setValues] = useState({
    name: '',
    email: '',
    interest: preset && known.has(preset) ? preset : '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const er = {};
    if (!values.name.trim()) er.name = 'Please tell us your name.';
    if (!emailOk(values.email)) er.email = 'Please enter a valid email address.';
    if (!values.interest) er.interest = 'Please choose what you are interested in.';
    if (values.message.trim().length < 10) er.message = 'Please write a short message (at least 10 characters).';
    setErrors(er);
    if (Object.keys(er).length) {
      const first = Object.keys(er)[0];
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setSubmitted(true);
  };

  const field = (name) => ({
    id: `f-${name}`,
    name,
    value: values[name],
    onChange: update,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `e-${name}` : undefined,
  });

  if (submitted) {
    return (
      <div className="form__status" role="status">
        <strong>Thanks, {values.name.split(' ')[0]} — this is a design demo.</strong>
        <p>
          Your message has <em>not</em> been sent. To reach the studio, email{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a> or message{' '}
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp {site.phoneDisplay}
          </a>
          .
        </p>
        <button type="button" className="btn btn--ghost" style={{ marginTop: 16 }} onClick={() => setSubmitted(false)}>
          Edit message
        </button>
      </div>
    );
  }

  return (
    <form className="form" noValidate onSubmit={onSubmit}>
      <div className="form__row">
        <div className="field">
          <label htmlFor="f-name">Name</label>
          <input type="text" autoComplete="name" {...field('name')} />
          {errors.name && <p className="field__error" id="e-name">{errors.name}</p>}
        </div>
        <div className="field">
          <label htmlFor="f-email">Email</label>
          <input type="email" autoComplete="email" {...field('email')} />
          {errors.email && <p className="field__error" id="e-email">{errors.email}</p>}
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-interest">I’m interested in</label>
        <select {...field('interest')}>
          <option value="">Choose one…</option>
          {interests.map((g) => (
            <optgroup key={g.group} label={g.group}>
              {g.options.map(([v, l]) => (
                <option key={v} value={v}>
                  {l}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        {errors.interest && <p className="field__error" id="e-interest">{errors.interest}</p>}
      </div>
      <div className="field">
        <label htmlFor="f-message">Message</label>
        <textarea placeholder="Preferred dates, questions, experience level…" {...field('message')} />
        {errors.message && <p className="field__error" id="e-message">{errors.message}</p>}
      </div>
      <div>
        <button type="submit" className="btn">
          Check my enquiry
        </button>
      </div>
      <p className="form__fine">This form is a front-end demo. Nothing you type here is sent or stored.</p>
    </form>
  );
}
