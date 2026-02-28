const WHATSAPP_NUMBER = '94707047536'
const DISPLAY_NUMBER = '+94 707047536'

export function handleContactClick(event) {
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault()
  }

  const useWhatsApp = window.confirm(
    'How would you like to contact us?\n\nOK = WhatsApp\nCancel = Phone call',
  )

  if (useWhatsApp) {
    window.location.href = `https://wa.me/${WHATSAPP_NUMBER}`
  } else {
    window.location.href = `tel:${DISPLAY_NUMBER.replace(/\s+/g, '')}`
  }
}

