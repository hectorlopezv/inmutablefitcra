import { useAsyncDebounce } from "react-table";
import { useState } from "react";
const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="text-base flex items-center">
      <span className="mr-2 text-sm">Search:</span>
      <input
        className="flex-grow 
        text-center
        border
        rounded-md
        focus:outline-none"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      />
    </div>
  );
};
export default GlobalFilter;
