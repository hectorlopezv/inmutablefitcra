/**
 * Headers for table 
 * @param {headerGroups}  headers of the table from react-table
 * @return {component} html header of the table
 */
const HeaderTable = ({headerGroups}) => {
    return (
        <thead>
                {headerGroups.map(headerGroup => (
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    className="cborder"
                  >
                  {headerGroup.headers.map(column => (
                       <th
                      {...column.getHeaderProps()}
                      className="cborder"
                      >
                         {column.render('Header')}
                       </th>
                     ))}
                   </tr>
                 ))}
            </thead>
    )
}
export default HeaderTable;