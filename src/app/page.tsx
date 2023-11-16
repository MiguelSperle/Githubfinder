'use client'

import * as Styled from '../app/styles'
import Typography from '@/components/Typography'
import Image from 'next/image'
import github from '../assets/github.png'
import InputWidget from '@/components/InputWidget'
import Button from '@/components/Button'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { useContext, useState } from 'react'
import { AuthContextTheme } from '@/context/ThemeContext'
import { useRouter } from 'next/navigation'
import { setCookie } from 'cookies-next'

export default function Home() {
  const { handleReplaceTheme, lightTheme } = useContext(AuthContextTheme)

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
    return router.push(`/profile/${user}`)
  }

  // function findUserOnKeyEnter(event: React.KeyboardEvent<HTMLInputElement>) {
  //   if (event.key === 'Enter') {
  //     if (user === '') {
  //       return alert('Please enter a username to search')
  //     } else {
  //       setCookie('saveInputText', user)
  //       return router.push(`/profile/${user}`)
  //     }
  //   }
  // }

  return (
    <Styled.ContainerHome>
      <Styled.ContainerSecondHome>
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
              <Typography
                text="github.com/"
                fontSize="0.9rem"
                fontWeight="200"
              />

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
              // onKeyDown={findUserOnKeyEnter}
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
        <Styled.ContainerImageButton>
          <Button
            type="submit"
            width="70px"
            height="50px"
            fontSize="1.25rem"
            className="button-change-theme"
            onClick={handleReplaceTheme}
          >
            {lightTheme ? <HiOutlineSun /> : <HiOutlineMoon />}
          </Button>
          <Image
            className="image-main"
            width={600}
            height={600}
            src={github}
            alt=""
          />
        </Styled.ContainerImageButton>
      </Styled.ContainerSecondHome>
    </Styled.ContainerHome>
  )
}
