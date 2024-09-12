import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
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
      />
      <SortBy
        field="sortBy"
        options={[
          { value: "name-asc", lable: "sort by Name A-Z" },
          { value: "name-desc", lable: "sort by Name Z-A" },
          { value: "regularPrice-asc", lable: "sort price (from low)" },
          { value: "regularPrice-desc", lable: "sort price (from high)" },
          { value: "maxCapacity-asc", lable: "sort capacity (from low)" },
          { value: "maxCapacity-desc", lable: "sort capacity (from high)" },
        ]}
      />
    </TableOperations>
  );
}
