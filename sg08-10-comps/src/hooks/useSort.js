import {useState} from 'react'

const useSort = ({data, config}) => {
  const [sortOrder, setSortOrder] = useState(null) // 'null', 'asc' or 'desc'
  const [sortBy, setSortBy] = useState(null)

  const setSortColumn = label => {
    // If user clicks on a new column, reset 'sortOrder' to 'asc' and 'sortBy' to new column
    if (sortBy && sortBy !== label) {
      setSortOrder('asc')
      setSortBy(label)
      return
    }

    // If user clicks on the same column, cycle 'sortOrder' through 'asc', 'desc', and 'null'
    if (sortOrder === null) setSortOrder('asc')
    else if (sortOrder === 'asc') setSortOrder('desc')
    else setSortOrder(null)

    setSortBy(label)
  }

  let sortedData = data

  // Only sort data if 'sortOrder' and 'sortBy' are not null (Video 271)
  if (sortOrder && sortBy) {
    // Find column in 'config' corresponding to 'sortBy' state and get its 'sortValue' function
    const {sortValue} = config.find(colItem => colItem.label === sortBy)

    // Make a copy of 'data' prop because sort() modifies original array
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a)
      const valueB = sortValue(b)

      // Change a-b to b-a for 'desc' sortOrder
      const reverseFactor = sortOrder === 'desc' ? -1 : 1

      if (typeof valueA === 'string') return valueA.localeCompare(valueB) * reverseFactor
      else return (valueA - valueB) * reverseFactor
    })
  }

  return {sortBy, sortOrder, sortedData, setSortColumn}
}

export default useSort
