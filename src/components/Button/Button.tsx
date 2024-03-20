import styled from 'styled-components'
import tw from 'twin.macro'
import cl from 'clsx'
import { ButtonProps } from './types'

const Button = ({ disabled, onClick, children, className }: ButtonProps) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      className={cl(className, 'app-button', { 'app-disabled': disabled })}
    >
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  ${tw`border border-black py-1 px-2`}

  &.app-disabled {
    ${tw`opacity-30 pointer-events-none select-none`}
  }
`

export default Button
