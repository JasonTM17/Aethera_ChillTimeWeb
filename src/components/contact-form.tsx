import { useEffect, useRef, useState, type FormEvent } from 'react'

import {
  createEmailDraft,
  getContactValues,
  validateContact,
  type ContactErrors,
  type ContactField,
} from '../lib/contact-form'
import { ContactFormConfirmation } from './contact-form-confirmation'
import { ContactFormFields } from './contact-form-fields'

export function ContactForm() {
  const confirmationRef = useRef<HTMLDivElement>(null)
  const shouldFocusForm = useRef(false)
  const [errors, setErrors] = useState<ContactErrors>({})
  const [draftHref, setDraftHref] = useState<string | null>(null)

  useEffect(() => {
    if (draftHref) confirmationRef.current?.focus()
    if (!draftHref && shouldFocusForm.current) {
      shouldFocusForm.current = false
      document.getElementById('name')?.focus()
    }
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
      <ContactFormConfirmation
        containerRef={confirmationRef}
        draftHref={draftHref}
        onStartOver={() => {
          shouldFocusForm.current = true
          setDraftHref(null)
        }}
      />
    )
  }

  return (
    <ContactFormFields
      errors={errors}
      onSubmit={handleSubmit}
      onChange={clearError}
    />
  )
}
