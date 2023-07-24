import {HiArrowSmallDown, HiArrowSmallUp, HiArrowsUpDown} from 'react-icons/hi2'
import useSort from '../hooks/useSort.js'
import Table from './Table.jsx'

const SortableTable = props => {
  const {data, config} = props

  const {sortBy, sortOrder, sortedData, setSortColumn} = useSort({data, config})

  // Icons in table header for sortable columns
  const getIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy) return <HiArrowsUpDown />
    if (sortOrder === null) return <HiArrowsUpDown />
    if (label === sortBy && sortOrder === 'asc') return <HiArrowSmallUp />
    if (label === sortBy && sortOrder === 'desc') return <HiArrowSmallDown />
  }

  // Create a new config adding a clickable header for sorting (if column has 'sortValue' property)
  const updatedConfig = config.map(colItem => {
    if (!colItem.sortValue) return colItem

    return {
      ...colItem,
      header: () => (
        <th
          className='flex cursor-pointer items-center gap-1 hover:bg-gray-100'
          onClick={() => setSortColumn(colItem.label)}
        >
          {getIcons(colItem.label, sortBy, sortOrder)}
          {colItem.label}
        </th>
      )
    }
  })

  // Override 'config' in props with 'updatedConfig' and 'data' with 'sortedData'
  return (
    <Table
      {...props}
      data={sortedData}
      config={updatedConfig}
    />
  )
}

export default SortableTable
