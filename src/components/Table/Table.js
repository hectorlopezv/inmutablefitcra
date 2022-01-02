import { useMemo } from "react"
import { useTable } from "react-table" 
import HeaderTable from "../CryptoTable/HeaderTable/HeaderTable"
import HeaderBody from "../CryptoTable/HeaderBody/HeaderBody";
import TableWrapper from "../CryptoTable/TableWrapper/TableWrapper"
import { getHeaders, getData } from "../../util/tableUtils";

/**
 * Table Component divided in Sections for it to be easily tested.
 * @param {tableData}  formated data for the table containing values in a span of X months.
 * @return {Component} Component divided in Sections for it to be easily tested.
 */
const Table = ({ tableData }) => {
  
    const columns = useMemo(() => {
        return   getHeaders()
      }, []);
    
      const data = useMemo(
        () => {
          return  getData(tableData)
        }, [tableData]
      );
    
       const {
            getTableProps,
            getTableBodyProps,
             headerGroups,
             rows,
             prepareRow,
       } = useTable({ columns, data })
    return (
        <TableWrapper getTableProps={getTableProps}>
        <HeaderTable headerGroups={headerGroups} />
        <HeaderBody
          getTableBodyProps={getTableBodyProps}
          rows={rows}
          prepareRow={prepareRow}
        />
      </TableWrapper>  
    )
}
export default Table;