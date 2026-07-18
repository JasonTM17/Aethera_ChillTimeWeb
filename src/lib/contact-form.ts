import { siteContent } from './site-content'

export type ContactField = 'name' | 'email' | 'projectType' | 'message'
export type ContactErrors = Partial<Record<ContactField, string>>
export type ContactValues = Record<ContactField, string>

export const contactLimits = {
  name: 80,
  email: 254,
  message: 1200,
} as const

const projectTypes = new Set([
  'new product',
  'brand and website',
  'digital transformation',
  'creative partnership',
])

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

  if (!values.name) {
    errors.name = 'Please share your name.'
  } else if (values.name.length > contactLimits.name) {
    errors.name = `Keep your name under ${contactLimits.name} characters.`
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  } else if (values.email.length > contactLimits.email) {
    errors.email = 'This email address is too long.'
  }
  if (!projectTypes.has(values.projectType)) {
    errors.projectType = 'Choose the kind of journey.'
  }
  if (values.message.length < 20) {
    errors.message = 'Tell us a little more—at least 20 characters.'
  } else if (values.message.length > contactLimits.message) {
    errors.message = `Keep your note under ${contactLimits.message} characters.`
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
