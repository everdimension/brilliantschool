import React from 'react'
import { mainDescription } from './getMainMeta'

function truncateWords (str, n) {
  if (str.length <= n) { return str }
  const joinedStr = str
    .split(/[\n\r\n]/)
    .map(l => l.replace(/^\s+/, '').replace(/\s+/g, ' '))
    .join(' ')
    .trim()
  const re = new RegExp(`^.{0,${n}}[\\S]*\\s`)
  const truncatedMatch = joinedStr.match(re)
  if (!truncatedMatch) { return 'no match' }
  let truncated = truncatedMatch[0]
  if (truncated.length > n) {
    const match = truncated.match(/(.*)\s+\S+$/)
    if (match) {
      truncated = match[1]
    } else {
      truncated = truncated.substr(0, n - 1)
    }
  }
  return `${truncated}…`
}

export default function getSocialMeta (pathname, props, { WEBSITE_ROOT, fallbackTitle }) {
  let ogDescription
  let ogTitle
  if (pathname === '/contacts/') {
    ogDescription = 'Контакты школы brilliant. Схема проезда'
    ogTitle = 'Контакты'
  } else if (pathname === '/404/') {
    ogDescription = 'Страница не существует'
    ogTitle = 'Brilliant School'
  } else if (pathname === '/') {
    ogDescription = mainDescription
    ogTitle = 'Языковая школа brilliant'
  } else {
    const { routes } = props
    if (routes && routes.length && routes[1]) {
      const { data } = routes[1].page
      if (data && data.body) {
        ogDescription = truncateWords(data.body.replace(/<[^>]*>/g, ''), 200)
      }
      if (data && data.title) {
        ogTitle = data.title
      }
    } else {
      ogDescription = mainDescription
      ogTitle = fallbackTitle ? fallbackTitle.split(' | ')[0] : props.title
    }
  }

  return [
    <meta property="og:title" content={ogTitle} />,
    <meta property="og:type" content="website" />,
    <meta property="og:url" content={`${WEBSITE_ROOT}${pathname}`} />,
    <meta property="og:description" content={ogDescription} />,
    <meta property="og:site_name" content="Brilliant School" />,
    <meta property="og:locale" content="ru_RU" />,
  ]
}
