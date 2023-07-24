import {Fragment} from 'react'

const Table = ({data, config, keyFn}) => {
  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>
          {config.map(item => {
            // If customized header is provided, e.g. <SortableTable />,
            // wrap it in <Fragment /> to provide 'key' (Video 265)
            if (item.header) return <Fragment key={item.label}>{item.header()}</Fragment>
            else return <th key={item.label}>{item.label}</th>
          })}
        </tr>
      </thead>

      <tbody>
        {/* Map over 'data' to display a <tr> for each item */}
        {data.map(rowItem => (
          <tr
            key={keyFn(rowItem)}
            className='border-b'
          >
            {/* For each row, map over 'config' to display a <td> for each column by passing in 'rowItem' to each render() */}
            {config.map(colItem => (
              <td
                className='p-2'
                key={colItem.label}
              >
                {colItem.render(rowItem)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
