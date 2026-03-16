export function handleContactClick(event) {
  if (event && typeof event.preventDefault === 'function') {
    event.preventDefault()
  }

  window.location.href = 'https://wa.me/94707047536'
}

