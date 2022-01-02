import { memo } from "react";
import Filter from "../../Filter/Filter";
/**
 * Headers for table
 * @param {headerGroups}  headers of the table from react-table
 * @return {component} html header of the table
 */
const HeaderTable = ({
  headerGroups,
  visibleColumns,
  state,
  setGlobalFilter,
  preGlobalFilteredRows,
}) => {
  return (
    <thead>
      {preGlobalFilteredRows !== undefined && (
        <Filter
          visibleColumns={visibleColumns}
          state={state}
          setGlobalFilter={setGlobalFilter}
          preGlobalFilteredRows={preGlobalFilteredRows}
        />
      )}

      {headerGroups.map((headerGroup) => (
        <tr {...headerGroup.getHeaderGroupProps()} className="cborder">
          {headerGroup.headers.map((column) => (
            <th {...column.getHeaderProps()} className="cborder">
              {column.render("Header")}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
export default memo(HeaderTable);
