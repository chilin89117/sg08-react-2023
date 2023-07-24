import SortableTable from '../components/SortableTable.jsx'
import Table from '../components/Table.jsx'

const TablePage = () => {
  // Raw data
  const data = [
    {name: 'orange', color: 'bg-orange-500', score: 5},
    {name: 'apple', color: 'bg-red-500', score: 3},
    {name: 'banana', color: 'bg-yellow-500', score: 4},
    {name: 'lime', color: 'bg-green-500', score: 2}
  ]

  // Config object showing how 'data' should be displayed in <Table />
  // 1. 'label' is column header
  // 2. 'item' is a function that returns what to display
  // 3. 'sortValue' is a function that returns the value to sort on
  const config = [
    {
      label: 'Name',
      render: item => item.name,
      sortValue: item => item.name
    },
    {
      label: 'Color',
      render: item => <div className={`m-3 h-10 w-10 p-2 ${item.color}`}></div>
    },
    {
      label: 'Score',
      render: item => item.score,
      sortValue: item => item.score
    }
  ]

  // Function to generate key; can not assume names in 'data' will be unique (Video 255)
  const keyFn = data => data.name

  return (
    <div>
      {/* Compare non-sortable table with sortable table */}
      <Table
        data={data}
        config={config}
        keyFn={keyFn}
      />

      <br />
      <br />

      <SortableTable
        data={data}
        config={config}
        keyFn={keyFn}
      />
    </div>
  )
}

export default TablePage
