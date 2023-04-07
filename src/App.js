import React, { useEffect, useState } from "react";
import "./styles.css";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const columns = [
  { field: "id", headerName: "ID" },
  { field: "title", headerName: "Title" },
  { field: "price", headerName: "Price" },
  { field: "brand", headerName: "Brand" },
  { field: "stock", headerName: "Stock" }
];
export default function App() {
  const [data, setData] = useState([]);
  const defaultColDef = {
    filter: "true",
    sortable: "true",
    editable: "true",
    resizeble: "true"
  };
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setData(json.products));
  }, []);
  console.log("data", data);
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        rowData={data}
        columnDefs={columns}
        defaultColDef={defaultColDef}
      ></AgGridReact>
    </div>
  );
}
