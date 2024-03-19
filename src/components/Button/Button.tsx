import styled from 'styled-components'
import { ButtonProps } from './types'

const Button = ({ onClick, children }: ButtonProps) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

const StyledButton = styled.button`
  border: 1px solid black;
`

export default Button
