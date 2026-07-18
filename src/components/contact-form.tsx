import { useEffect, useRef, useState, type FormEvent } from 'react'

import {
  createEmailDraft,
  getContactValues,
  validateContact,
  type ContactErrors,
  type ContactField,
} from '../lib/contact-form'

const inputClasses =
  'mt-3 min-h-14 w-full rounded-2xl border border-black/15 bg-white px-5 text-base text-black outline-none transition-colors placeholder:text-black/30 focus:border-black'

export function ContactForm() {
  const confirmationRef = useRef<HTMLDivElement>(null)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [draftHref, setDraftHref] = useState<string | null>(null)

  useEffect(() => {
    if (draftHref) confirmationRef.current?.focus()
  }, [draftHref])

  const clearError = (field: ContactField) => {
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const values = getContactValues(event.currentTarget)
    const nextErrors = validateContact(values)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      const firstInvalidField = Object.keys(nextErrors)[0] as ContactField
      const control = event.currentTarget.elements.namedItem(firstInvalidField)
      if (control instanceof HTMLElement) control.focus()
      return
    }

    setErrors({})
    setDraftHref(createEmailDraft(values))
  }

  if (draftHref) {
    return (
      <div
        ref={confirmationRef}
        tabIndex={-1}
        aria-live="polite"
        className="rounded-[2rem] border border-black/10 bg-black/[0.025] p-8 outline-none sm:p-12"
      >
        <p className="text-xs font-medium tracking-[0.2em] text-muted uppercase">
          Your note is ready
        </p>
        <h2 className="mt-5 font-display text-5xl leading-none tracking-[-1.5px] text-black">
          One last, human step.
        </h2>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
          Nothing has been sent yet. Open the prepared email, review your note,
          and send it from your own email app.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={draftHref}
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-black px-8 text-sm text-white transition-transform duration-300 hover:scale-[1.03]"
          >
            Open Email Draft
          </a>
          <button
            type="button"
            className="min-h-14 cursor-pointer rounded-full border border-black/15 px-8 text-sm text-black transition-colors hover:bg-black/5"
            onClick={() => setDraftHref(null)}
          >
            Start Over
          </button>
        </div>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Your name" name="name" error={errors.name} onChange={clearError} />
        <FormField
          label="Email address"
          name="email"
          type="email"
          error={errors.email}
          onChange={clearError}
        />
      </div>

      <label className="mt-6 block text-sm text-black" htmlFor="projectType">
        What are we exploring?
        <select
          id="projectType"
          name="projectType"
          defaultValue=""
          aria-invalid={Boolean(errors.projectType)}
          aria-describedby={errors.projectType ? 'projectType-error' : undefined}
          className={`${inputClasses} appearance-none`}
          onChange={() => clearError('projectType')}
        >
          <option value="" disabled>
            Select a journey
          </option>
          <option value="new product">A new product</option>
          <option value="brand and website">A brand and website</option>
          <option value="digital transformation">A digital transformation</option>
          <option value="creative partnership">An ongoing creative partnership</option>
        </select>
        <FieldError id="projectType-error" message={errors.projectType} />
      </label>

      <label className="mt-6 block text-sm text-black" htmlFor="message">
        Tell us what is calling you
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="The idea, the tension, the change you hope to make…"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${inputClasses} resize-y py-4`}
          onChange={() => clearError('message')}
        />
        <FieldError id="message-error" message={errors.message} />
      </label>

      <button
        type="submit"
        className="mt-8 min-h-14 cursor-pointer rounded-full bg-black px-10 text-sm text-white transition-transform duration-300 hover:scale-[1.03]"
      >
        Prepare My Note
      </button>
      <p className="mt-4 max-w-lg text-xs leading-relaxed text-muted">
        This creates a draft in your email app. It does not send or store your
        information on this website.
      </p>
    </form>
  )
}

type FormFieldProps = {
  label: string
  name: 'name' | 'email'
  type?: 'text' | 'email'
  error?: string
  onChange: (field: ContactField) => void
}

function FormField({ label, name, type = 'text', error, onChange }: FormFieldProps) {
  return (
    <label className="block text-sm text-black" htmlFor={name}>
      {label}
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={name}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={inputClasses}
        onChange={() => onChange(name)}
      />
      <FieldError id={`${name}-error`} message={error} />
    </label>
  )
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? (
    <span id={id} className="mt-2 block text-xs text-black" role="alert">
      {message}
    </span>
  ) : null
}
