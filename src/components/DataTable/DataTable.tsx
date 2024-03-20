import styled from 'styled-components'
import tw from 'twin.macro'
import { DataTableProps } from './types'

const DataTable = ({ children }: DataTableProps) => {
  return <StyledTable>{children}</StyledTable>
}

const StyledTable = styled.table`
  ${tw`w-full`}

  thead th {
    ${tw`p-2 bg-blue-400 text-white font-medium text-left`}
  }

  tr:nth-child(even) td {
    ${tw`bg-blue-100`}
  }

  td {
    ${tw`p-2`}
  }
`

export default DataTable
