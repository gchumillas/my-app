import styled from 'styled-components'
import tw from 'twin.macro'
import cl from 'clsx'
import { ButtonProps } from './types'

const Button = ({ disabled, danger, onClick, children, className }: ButtonProps) => {
  return (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      className={cl(className, 'app-button', { 'app-disabled': disabled, 'app-danger': danger })}
    >
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  ${tw`bg-white text-neutral-700 border border-neutral-700 rounded py-1 px-2`}

  &:hover {
    ${tw`bg-blue-100`}
  }

  &.app-danger {
    ${tw`text-red-700 border-red-700`}
  }

  &.app-disabled {
    ${tw`text-opacity-40 border-opacity-40 pointer-events-none select-none`}
  }
`

export default Button
