import React from 'react'

export const mainDescription = `В школе «brilliant» вы освоите красивый, полезный и
              разноплановый английский язык, укрепите уверенность в себе и
              узнаете немало интересного о межкультурной коммуникации.`
              .split(/\n/).map(l => l.replace(/^\s+/, '')).join(' ')

const descriptions = {
  '/': mainDescription,
  '/contacts/': `Контакты школы «brilliant». Схема проезда.
              +7 (915) 155-94-05
              Большая Никитская, 43, Москва, 121069`
              .split(/\n/).map(l => l.replace(/^\s+/, '')).join(' '),
}

export default function getMainMeta (pathname) {
  const description = descriptions[pathname] || mainDescription
  return <meta name="description" content={description} />
}
