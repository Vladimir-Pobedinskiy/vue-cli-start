/* eslint-disable no-console */

/*

Основные цели использования служебного работника в Vue CLI:

- Кэширование ресурсов:
  1. Service worker позволяет кэшировать статические файлы приложения (HTML, CSS, JavaScript, изображения и другие ресурсы).
  2. Это может улучшить производительность, уменьшив время загрузки при повторных посещениях страницы.

- Работа в офлайн-режиме:
  1. Service worker позволяет вашему приложению продолжать работать даже в условиях отсутствия подключения к интернету.
  2. Кэшированные ресурсы могут быть использованы для отображения страницы, даже если нет активного интернет-соединения.

-Уведомления и фоновые события:
  1. Service worker может использоваться для отображения уведомлений и обработки событий в фоновом режиме.
  2. Это полезно, например, для получения уведомлений даже тогда, когда вкладка браузера закрыта.

Важно отметить, что использование служебного работника также может влиять на кеширование и обновление ресурсов при обновлении версии приложения.
Например, новая версия служебного работника может привести к перекешированию ресурсов.

Если вам не требуется служебный работник или вы хотите настроить его поведение, вы можете удалить или настроить соответствующие настройки
в файле vue.config.js.

*/

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered() {
      console.log('Service worker has been registered.')
    },
    cached() {
      console.log('Content has been cached for offline use.')
    },
    updatefound() {
      console.log('New content is downloading.')
    },
    updated() {
      console.log('New content is available; please refresh.')
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error(error) {
      console.error('Error during service worker registration:', error)
    }
  })
}
