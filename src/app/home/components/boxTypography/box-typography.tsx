'use client'

import Button from '@/components/button'
import InputWidget from '@/components/input-widget'
import Typography from '@/components/typography'
import * as Styled from '../boxTypography/styles'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function BoxTypography() {
  const router = useRouter()

  const [user, setUser] = useState<string>('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUser(event.target.value)
  }

  function findUser() {
    if (user === '') {
      return alert('Please enter a username to search')
    }

    setCookie('saveUser', user)
    return router.push(`/user/${user}`)
  }

  function findUserOnKeyEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      if (user === '') {
        return alert('Please enter a username to search')
      } else {
        setCookie('saveUser', user)
        return router.push(`/user/${user}`)
      }
    }
  }

  return (
    <Styled.BoxTypography>
      <Typography
        text="Github Finder"
        fontSize="3.5rem"
        fontWeight="300"
        className="name-main"
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'justify',
        }}
        className="boxText"
      >
        <Typography
          text="Enter path the user ex: "
          fontSize="0.9rem"
          fontWeight="200"
        />

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Typography text="github.com/" fontSize="0.9rem" fontWeight="200" />

          <span style={{ color: '#006dff', fontWeight: 300 }}>
            MiguelSperle
          </span>
        </div>
      </div>
      <Styled.BoxSearch>
        <InputWidget
          type="type"
          width="250px"
          height="54px"
          fontSize="1.25rem"
          placeholder="Ex: MiguelSperle"
          className="input-widget"
          onChange={handleChange}
          onKeyDown={findUserOnKeyEnter}
        />

        <Button
          type="submit"
          width="150px"
          height="50px"
          fontSize="1.125rem"
          className="button-find"
          onClick={findUser}
        >
          Find
        </Button>
      </Styled.BoxSearch>
    </Styled.BoxTypography>
  )
}
