import React from 'react'

import styles from './404page.module.css'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>404 | Страница не найдена</h2>
        <Link href={'/earnings'} className={styles.link}>
            <p>Вернуться на главную</p>
        </Link>
    </div>
  )
}

export default NotFoundPage