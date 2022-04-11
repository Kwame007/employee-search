import React, { useState, useEffect } from "react";
import EmployeeSearch from "./EmployeeSearch";
import EmployeesList from "./EmployeesList";
import useFetchData from "./useFetchData";
// import useFetchEmployees from "./useFetchEmployees";

const Employee = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const { document: employees, isLoading } = useFetchData(searchTerm);

  useEffect(() => {
    if (employees) {
      const serchResults = employees.filter(
        (doc) =>
          doc.value.fullname.toLowerCase().includes(searchTerm) ||
          doc.value.id.toLowerCase().includes(searchTerm)
      );
      setData(serchResults);
      console.log(serchResults);
    }
  }, [employees, searchTerm]);

  const handleSearch = (query) => {
    console.log("in employee");
    console.log(query);
    setSearchTerm(query);
    console.log(data);
  };

  return (
    <>
      <EmployeeSearch onSubmit={handleSearch} />
      <EmployeesList doc={data || employees} isLoading={isLoading} />
    </>
  );
};

export default Employee;
