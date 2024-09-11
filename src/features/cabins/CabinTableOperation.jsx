import Filter from "../../ui/Filter";
import TableOperations from "../../ui/TableOperations";

export default function CabinTableOperation() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", lable: "All" },
          { value: "no-discount", lable: "No discount" },
          { value: "with-discount", lable: "With Discount" },
        ]}
      ></Filter>
    </TableOperations>
  );
}
