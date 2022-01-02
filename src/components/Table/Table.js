import { useMemo } from "react";
import { useTable, useFilters, useGlobalFilter } from 'react-table'
import HeaderTable from "../CryptoTable/HeaderTable/HeaderTable";
import HeaderBody from "../CryptoTable/HeaderBody/HeaderBody";
import TableWrapper from "../CryptoTable/TableWrapper/TableWrapper";
import { getHeaders, getData } from "../../util/tableUtils";

import { matchSorter } from "match-sorter";

function fuzzyTextFilterFn(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}

// Let the table remove the filter if the string is empty
fuzzyTextFilterFn.autoRemove = (val) => !val;

/**
 * Table Component divided in Sections for it to be easily tested.
 * @param {tableData}  formated data for the table containing values in a span of X months.
 * @return {Component} Component divided in Sections for it to be easily tested.
 */
const Table = ({ tableData }) => {
  const columns = useMemo(() => {
    return getHeaders();
  }, []);

  const data = useMemo(() => {
    return getData(tableData);
  }, [tableData]);


  const filterTypes = useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    visibleColumns,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    { columns, data, filterTypes },
    useFilters,
    useGlobalFilter
  );
  return (
    <TableWrapper getTableProps={getTableProps}>
      <HeaderTable
        headerGroups={headerGroups}
        visibleColumns={visibleColumns}
        state={state}
        setGlobalFilter={setGlobalFilter}
        preGlobalFilteredRows={preGlobalFilteredRows}
      />
      <HeaderBody
        getTableBodyProps={getTableBodyProps}
        rows={rows}
        prepareRow={prepareRow}
      />
    </TableWrapper>
  );
};
export default Table;
