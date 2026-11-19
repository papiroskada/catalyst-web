import { useEffect, useState, type FormEvent } from 'react';

interface Props {
  endpoint?: string;
  email: string;
  source: string; // page the enquiry came from, sent with the message
  idPrefix?: string; // keeps field ids unique when a page has two forms (section + dialog)
}

type State = { kind: 'idle' } | { kind: 'sending' } | { kind: 'sent'; name: string } | { kind: 'error'; msg: string };

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export default function ContactForm({ endpoint, email, source, idPrefix = 'f' }: Props) {
  const [state, setState] = useState<State>({ kind: 'idle' });
  // The server-rendered button stays disabled until React takes over, so a click can never
  // fall through to a native submit that would put the visitor's details in the URL.
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('name') ?? '').trim();
    const mail = String(fd.get('email') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();
    if (fd.get('website')) return; // honeypot: bots fill hidden fields
    if (!name) return setState({ kind: 'error', msg: 'Add your name so we know who to reply to.' });
    if (!EMAIL_RE.test(mail)) return setState({ kind: 'error', msg: 'Enter an email like name@company.com.' });

    if (!endpoint) {
      // No form backend configured yet: hand the message to the visitor's mail app.
      const body = `${message}\n\n— ${name} (${mail})`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent('Enquiry from catalyst website')}&body=${encodeURIComponent(body)}`;
      return setState({ kind: 'sent', name });
    }

    setState({ kind: 'sending' });
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name, email: mail, message, source }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState({ kind: 'sent', name });
    } catch {
      setState({ kind: 'error', msg: `Something went wrong. Please email us at ${email}.` });
    }
  }

  if (state.kind === 'sent') {
    return (
      <div className="cform" role="status">
        <p className="sent">Thanks, {state.name}. We'll reply within two working days.</p>
      </div>
    );
  }

  return (
    <form className="cform" method="post" onSubmit={onSubmit} noValidate aria-label="Contact form">
      <div className="field">
        <label htmlFor={`${idPrefix}-name`}>Your name</label>
        <input id={`${idPrefix}-name`} name="name" autoComplete="name" required placeholder="Jane Smith" onInput={() => setState({ kind: 'idle' })} />
      </div>
      <div className="field">
        <label htmlFor={`${idPrefix}-email`}>Email</label>
        <input id={`${idPrefix}-email`} name="email" type="email" autoComplete="email" required placeholder="name@yourcompany.com" onInput={() => setState({ kind: 'idle' })} />
      </div>
      <div className="field">
        <label htmlFor={`${idPrefix}-msg`}>What slows your team down today?</label>
        <textarea id={`${idPrefix}-msg`} name="message" placeholder="Our orders, invoices and supplier updates are spread across a few spreadsheets and nobody knows which one is current." />
      </div>
      <div className="hp" aria-hidden="true">
        <label htmlFor={`${idPrefix}-website`}>Website</label>
        <input id={`${idPrefix}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="err" role="alert">{state.kind === 'error' ? state.msg : ''}</p>
      <p className="consent">
        We use your details only to reply to this message. See our <a href="/privacy/">privacy policy</a>.
      </p>
      <button className="btn" type="submit" disabled={!ready || state.kind === 'sending'} style={{ alignSelf: 'flex-end' }}>
        {state.kind === 'sending' ? 'Sending…' : 'Send'}
      </button>
    </form>
  );
}
