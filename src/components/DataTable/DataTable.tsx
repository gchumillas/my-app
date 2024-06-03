import styled from 'styled-components'
import tw from 'twin.macro'
import { DataTableProps } from './types'

const DataTable = ({ children, ...rest }: DataTableProps) => {
  return <StyledTable {...rest}>{children}</StyledTable>
}

const StyledTable = styled.table`
  ${tw`w-full`}

  th {
    ${tw`p-2 bg-blue-400 text-white font-medium text-left`}

    &:last-child {
      ${tw`text-right`}
    }
  }

  td {
    ${tw`p-2`}

    &:last-child {
      ${tw`text-right`}
    }
  }

  tr:nth-child(even) td {
    ${tw`bg-blue-100`}
  }
`

export default DataTable
