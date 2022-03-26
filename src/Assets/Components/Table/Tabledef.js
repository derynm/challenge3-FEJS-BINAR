import React from "react";
import { Table } from "react-bootstrap";
import "./table.css";

export const Tabledef = () => {
  const array = [
    {
      index: 0,
      balance: "$2,104.95",
      age: 29,
      email: "sykesjordan@geekosis.com",
      phone: "+1 (973) 496-3763",
      registered: "2019-09-15T08:48:13 -07:00",
      status: "status",
    },
    {
      index: 1,
      balance: "$3,386.65",
      age: 39,
      email: "sykesjordan@geekosis.com",
      phone: "+1 (874) 486-3663",
      registered: "2022-03-05T01:53:07 -07:00",
      status: "status",
    },
    {
      index: 2,
      balance: "$1,121.91",
      age: 20,
      email: "sykesjordan@geekosis.com",
      phone: "+1 (870) 495-2596",
      registered: "2018-02-28T03:29:31 -07:00",
      status: "status",
    },
    {
      index: 3,
      balance: "$2,515.09",
      age: 29,
      email: "sykesjordan@geekosis.com",
      phone: "+1 (890) 549-3781",
      registered: "2022-01-22T01:08:38 -07:00",
      status: "status",
    },
    {
      index: 4,
      balance: "$3,316.23",
      age: 32,
      email: "sykesjordan@geekosis.com",
      phone: "+1 (997) 474-3590",
      registered: "2017-03-07T10:25:41 -07:00",
      status: "status",
    },
    {
      index: 5,
      balance: "$2,828.45",
      age: 24,
      email: "sykesjordan@geekosis.com",
      phone: "+1 (999) 501-3998",
      registered: "2014-10-27T08:47:48 -07:00",
      status: "status",
    },
    {
      index: 6,
      balance: "$1,834.26",
      age: 39,
      email: "sykesjordan@geekosis.com",
      phone: "+1 (917) 445-2230",
      registered: "2015-04-20T08:20:29 -07:00",
      status: "status",
    },
  ];

  const Loop = (array) => {
    let DataArray = array;
    return DataArray.map((value) => {
      return (
          <tr>
            <td>{value.index}</td>
            <td>{value.email}</td>
            <td>{value.age}</td>
            <td>{value.registered}</td>
            <td>{value.phone}</td>
            <td>{value.balance}</td>
            <td>{value.status}</td>
          </tr>

      );
    });
  };

  return (
    <div>
      <Table>
        <thead id="table-head">
          <tr>
            <th>No</th>
            <th>User email</th>
            <th>Car</th>
            <th>Start Rent</th>
            <th>Finish Rent</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{Loop(array)}</tbody>
      </Table>
    </div>
  );
};
