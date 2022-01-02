import {  useNavigate } from "react-router-dom"

/**
 * Table Body of the table
 * @param {getTableBodyProps}  body information of the table
 * @param {rows}  row of the table
 * @param {prepareRow}  prepare row to be rendered
 * @return {component} html table body of the table
 */
const HeaderBody = ({ getTableBodyProps, rows, prepareRow }) => {
  const navigate = useNavigate();  
  return (
        <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
      return (
            <tr {...row.getRowProps()} onClick={()=> navigate(`/crypto/${row.original.id}`)}>
          {row.cells.map(cell => {
  
                return (
                  <td
                    {...cell.getCellProps()}
                    className="cborder"
                  >
                    <div className="flex items-center flex-wrap">
                     {cell.column.id === "name" && (<img className="h-6 m-1 mr-2"  src={cell.row.original.image}/>)} 
                    {cell.render('Cell')}
                  </div>
                
              </td>
                )
              })}
            </tr>
          )
       })}
      </tbody>
    )
}
export default HeaderBody;