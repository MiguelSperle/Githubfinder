'use client'

import Button from '@/components/button'
import InputWidget from '@/components/input-widget'
import Typography from '@/components/typography'
import * as Styled from '../boxTypography/styles'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function BoxTypography() {
  const router = useRouter()

  const [userName, setUserName] = useState<string>('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value)
  }

  function findUser() {
    if (userName === '') {
      return alert('Please enter a username to search')
    }

    return router.push(`/user/${userName}`)
  }

  function findUserOnKeyEnter(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      if (userName === '') {
        return alert('Please enter a username to search')
      } else {
        return router.push(`/user/${userName}`)
      }
    }
  }

  return (
    <Styled.BoxTypography>
      <p>Github Finder</p>
      {/* <Typography
        text="Github Finder"
        fontSize="3.5rem"
        fontWeight="300"
        className="name-main"
      /> */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'justify',
        }}
        className="boxText"
      >
        <p>Enter path the user ex: </p>
        {/* <Typography
          text="Enter path the user ex: "
          fontSize="0.9rem"
          fontWeight="200"
        /> */}

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <p>github.com/</p>
          {/* <Typography text="github.com/" fontSize="0.9rem" fontWeight="200" /> */}

          <span style={{ color: '#006dff', fontWeight: 300 }}>
            MiguelSperle
          </span>
        </div>
      </div>
      <Styled.BoxSearch>
        <input type="text" className="input-widget" />
        {/* <InputWidget
          type="type"
          width="250px"
          height="54px"
          fontSize="1.25rem"
          placeholder="Ex: MiguelSperle"
          className="input-widget"
          onChange={handleChange}
          onKeyDown={findUserOnKeyEnter}
        /> */}
        <button type="submit" className="button-find">
          find
        </button>
        {/* <Button
          type="submit"
          width="150px"
          height="50px"
          fontSize="1.125rem"
          className="button-find"
          onClick={findUser}
        >
          Find
        </Button> */}
      </Styled.BoxSearch>
    </Styled.BoxTypography>
  )
}
