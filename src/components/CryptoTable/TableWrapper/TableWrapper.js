/**
 * Table Wrapper for headers and body
 * @param {children}  headers and body of the table
 * @param {getTableProps}  getTableProps from react-table library
 * @return {component} html table wrapper for header and body of the table
 */
const TableWrapper = ({children, getTableProps}) => {
    return (
        <div className="overflow-x-auto w-full">
            <table
                {...getTableProps()}
                className="cborder w-full"
            >
                {children}
            </table>
        </div>
    )
}

export default TableWrapper;