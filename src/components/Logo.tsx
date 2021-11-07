import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as CwdLogo } from 'src/assets/cwd-logo.svg'
import { ReactComponent as CwdLogoDark } from 'src/assets/cwd-logo-dark.svg'
import styled from 'styled-components'

export interface ILogoProps {
  variant?: 'default' | 'dark'
}

const Logo = ({ variant = 'default' }: ILogoProps) => {
  if (variant === 'dark') {
    return (
      <Link to='/'>
        <StyledLogoDark />
      </Link>
    )
  }
  return (
    <Link to='/'>
      <StyledLogo />
    </Link>
  )
}

const StyledLogo = styled(CwdLogo)`
  width: 100px;
  height: 30px;
`

const StyledLogoDark = styled(CwdLogoDark)`
  width: 100px;
  height: 30px;
`

export default Logo
