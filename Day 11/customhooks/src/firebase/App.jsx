import React, { useEffect, useState } from "react";

export default function App() {
  let [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
  });
  let [data, setdata] = useState({});

  const inputchange = (event) => {
    console.log("input change fun fired ");

    console.log(event.target.value);
    setformdata({
      ...formdata,
      [event.target.name]: event.target.value,
    });
  };

  const submit = async (event) => {
    event.preventDefault();

    // console.log("submit button fire ");
    // console.log(formdata);

    let response = await fetch(
      "https://formdatattf-default-rtdb.asia-southeast1.firebasedatabase.app/app.json",
      {
        method: "POST",
        body: JSON.stringify(formdata),
      }
    );
    console.log(response);
    let actudaldata = await response.json();
    console.log(actudaldata);
    getdata();
  };

  useEffect(() => {
    getdata();
  }, [data.length]);

  const getdata = async () => {
    let response = await fetch(
      "https://formdatattf-default-rtdb.asia-southeast1.firebasedatabase.app/app.json"
    );

    let arr = [];

    let data = await response.json();
    for (const key in data) {
      // console.log(key);
      arr.push({ ...data[key], id: key });
    }
    // // console.log(data);
    // console.log("array data ---------",arr);
    // // setdata(arr)
    console.log("arrayyyy--",arr);
    setdata(data);
  };

  return (
    <div>
      App
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="first-name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control w-50"
            id="first-name"
            name="firstname"
            onChange={inputchange}
          />
        </div>
        <div>
          <label htmlFor="last-name" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control w-50"
            id="last-name"
            name="lastname"
            onChange={inputchange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
          </tr>
        </thead>
        <tbody>
          {  arr.length > 0 &&
            arr.map((d, i) => {
              return (
                <tr>
                  <th scope="row">1</th>
                  <td>{i + 1}</td>
                  <td>{d.firstname}</td>
                  <td>{d.lastname}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {console.log("testing", data)}
    </div>
  );
}
