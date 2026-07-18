import { siteContent } from './site-content'

export type ContactField = 'name' | 'email' | 'projectType' | 'message'
export type ContactErrors = Partial<Record<ContactField, string>>
export type ContactValues = Record<ContactField, string>

export function getContactValues(form: HTMLFormElement): ContactValues {
  const data = new FormData(form)

  return {
    name: String(data.get('name') ?? '').trim(),
    email: String(data.get('email') ?? '').trim(),
    projectType: String(data.get('projectType') ?? '').trim(),
    message: String(data.get('message') ?? '').trim(),
  }
}

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {}

  if (!values.name) errors.name = 'Please share your name.'
  if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }
  if (!values.projectType) errors.projectType = 'Choose the kind of journey.'
  if (values.message.length < 20) {
    errors.message = 'Tell us a little more—at least 20 characters.'
  }

  return errors
}

export function createEmailDraft(values: ContactValues) {
  const subject = encodeURIComponent(`New ${values.projectType} journey with ${values.name}`)
  const body = encodeURIComponent(
    `Name: ${values.name}\nEmail: ${values.email}\nProject: ${values.projectType}\n\n${values.message}`,
  )

  return `mailto:${siteContent.email}?subject=${subject}&body=${body}`
}
