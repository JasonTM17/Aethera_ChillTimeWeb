import type { FormEventHandler } from 'react'

import {
  contactLimits,
  type ContactErrors,
  type ContactField,
} from '../lib/contact-form'

const inputClasses =
  'mt-3 min-h-14 w-full rounded-xl border border-black/15 bg-white px-5 text-base text-black placeholder:text-black/30 focus:border-black'

type ContactFormFieldsProps = {
  errors: ContactErrors
  onSubmit: FormEventHandler<HTMLFormElement>
  onChange: (field: ContactField) => void
}

export function ContactFormFields({
  errors,
  onSubmit,
  onChange,
}: ContactFormFieldsProps) {
  return (
    <form noValidate onSubmit={onSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Your name" name="name" error={errors.name} onChange={onChange} />
        <FormField
          label="Email address"
          name="email"
          type="email"
          error={errors.email}
          onChange={onChange}
        />
      </div>

      <div className="mt-6">
        <label className="block text-sm text-black" htmlFor="projectType">
          What are we exploring?
        </label>
        <select
          id="projectType"
          name="projectType"
          defaultValue=""
          aria-invalid={Boolean(errors.projectType)}
          aria-describedby={errors.projectType ? 'projectType-error' : undefined}
          className={`${inputClasses} appearance-none`}
          onChange={() => onChange('projectType')}
        >
          <option value="" disabled>Select a journey</option>
          <option value="new product">A new product</option>
          <option value="brand and website">A brand and website</option>
          <option value="digital transformation">A digital transformation</option>
          <option value="creative partnership">An ongoing creative partnership</option>
        </select>
        <FieldError id="projectType-error" message={errors.projectType} />
      </div>

      <div className="mt-6">
        <label className="block text-sm text-black" htmlFor="message">
          Tell us what is calling you
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={contactLimits.message}
          placeholder="The idea, the tension, the change you hope to make…"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${inputClasses} resize-y py-4`}
          onChange={() => onChange('message')}
        />
        <FieldError id="message-error" message={errors.message} />
      </div>

      <button
        type="submit"
        className="mt-8 min-h-14 cursor-pointer rounded-full bg-black px-10 text-sm text-white transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.99]"
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
    <div>
      <label className="block text-sm text-black" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={name}
        maxLength={contactLimits[name]}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className={inputClasses}
        onChange={() => onChange(name)}
      />
      <FieldError id={`${name}-error`} message={error} />
    </div>
  )
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? (
    <span id={id} className="mt-2 block text-xs text-error" role="alert">
      {message}
    </span>
  ) : null
}
