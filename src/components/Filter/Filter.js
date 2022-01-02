import GlobalFilter from "../GlobalFilter/GlobalFilter";

const Filter = ({
  visibleColumns,
  preGlobalFilteredRows,
  state,
  setGlobalFilter,
}) => {
  return (
    <tr className=" hover:bg-transparent cursor-default">
      <th colSpan={visibleColumns.length} className="">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </th>
    </tr>
  );
};
export default Filter;
