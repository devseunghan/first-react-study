import React from "react";

const students = [
  {
    name: 'Inje'
  },
  {
    name: 'steve'
  },
  {
    name: 'bill'
  },
  {
    name: 'jeff'
  }
];

export default function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student, index) => {
        return <li key={index}>{student.name}</li>;
      })}
    </ul>
  )
}