import React, { useEffect, useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [UsersData, setUsersData] = useState([]);
  const [UsersDataFilter, setUsersDataFilter] = useState([]);

  const onInputChange = (event) => {
    setSearchTerm(event.target.value);

    const filterList = UsersData.filter((list) => {
      return (
        list.province.includes(event.target.value) ||
        list.total_case.toString().includes(event.target.value)
      );
    });

    setUsersDataFilter(filterList);
  };

  const getData = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    setUsersData(data);
    setUsersDataFilter(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <input
        onChange={onInputChange}
        value={searchTerm}
        className="search-input"
      />
      <table className="main-table">
        <thead>
          <tr>
            <td>Name-lastname</td>
            <td>sex</td>
            <td>ages</td>
            <td>weight</td>
            <td>height</td>
            <td>BMI</td>
            <td>email</td>
            <td>phonenumber</td>
            <td>address</td>
          </tr>
        </thead>
        <tbody>
          return (
          <tr>
            <td>{item.name}</td>
            <td>{item.sex}</td>
            <td>{item.ages}</td>
            <td>{item.bmi}</td>
            <td>{item.email}</td>
            <td>{item.phonenumber}</td>
            <td>{item.address}</td>
          </tr>
          );
        </tbody>
      </table>
    </div>
  );
};

export default Home;
