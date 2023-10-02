import React from 'react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.banner}>
      <Section>
        <h2>
          SWEET GAMES
        </h2>
        <p style={{ wordWrap: 'break-word' }}>
          An open source, decentralized casino built on Solana.
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            as="a"
            color="white"
            href="https://sweetsmart.xyz/pages/how-to-buy-our-token"
            target="_blank"
            icon={<Icon.ExternalLink />}
          >
            Buy $SWTS
          </Button>
        </div>
      </Section>
    </div>
  )
}
