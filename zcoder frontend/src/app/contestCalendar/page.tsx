"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/table";
import TopNavigation from "../(Components)/topNavigation";
import HamburgerMenu from "../(Components)/hamburgerMenu";

interface Contest {
  id: number;
  name: string;
  startTimeSeconds: number;
  durationSeconds: number;
  [key: string]: any; // Allows any other properties
}

// const responseData = {
//   status: "OK",
//   result: [
//     {
//       id: 1990,
//       name: "Codeforces Round (Div. 2)",
//       type: "CF",
//       phase: "BEFORE",
//       frozen: false,
//       durationSeconds: 7200,
//       startTimeSeconds: 1721486100,
//       relativeTimeSeconds: -2172135,
//     },
//     {
//       id: 1988,
//       name: "Codeforces Round (Div. 2)",
//       type: "CF",
//       phase: "BEFORE",
//       frozen: false,
//       durationSeconds: 7200,
//       startTimeSeconds: 1721054100,
//       relativeTimeSeconds: -1740135,
//     },
//     {
//       id: 1983,
//       name: "Codeforces Round (Div. 2)",
//       type: "CF",
//       phase: "BEFORE",
//       frozen: false,
//       durationSeconds: 8100,
//       startTimeSeconds: 1720362900,
//       relativeTimeSeconds: -1048935,
//     },
//     {
//       id: 1987,
//       name: "Codeforces Round (Div. 1 + Div. 2)",
//       type: "CF",
//       phase: "BEFORE",
//       frozen: false,
//       durationSeconds: 10800,
//       startTimeSeconds: 1719758100,
//       relativeTimeSeconds: -444135,
//     },
//     {
//       id: 1989,
//       name: "Educational Codeforces Round 167 (Rated for Div. 2)",
//       type: "ICPC",
//       phase: "BEFORE",
//       frozen: false,
//       durationSeconds: 7200,
//       startTimeSeconds: 1719498900,
//       relativeTimeSeconds: -184935,
//     },
//     {
//       id: 1982,
//       name: "Codeforces Round 955 (Div. 2, with prizes from NEAR!)",
//       type: "CF",
//       phase: "BEFORE",
//       frozen: false,
//       durationSeconds: 7200,
//       startTimeSeconds: 1719326100,
//       relativeTimeSeconds: -12135,
//     },
//     {
//       id: 1986,
//       name: "Codeforces Round 954 (Div. 3)",
//       type: "ICPC",
//       phase: "FINISHED",
//       frozen: false,
//       durationSeconds: 8100,
//       startTimeSeconds: 1719154200,
//       relativeTimeSeconds: 159764,
//     },
//   ],
// };

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "startTime",
    label: "START TIME",
  },
  {
    key: "duration",
    label: "DURATION",
  },
];

export default function contestCalendar() {
  const [contestList, setContestList] = useState<Contest[]>([]);

  const fetchContestList = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/contest/`);

      const currentTimeSeconds = Math.floor(Date.now() / 1000);

      // console.log(currentTimeSeconds);

      // const formattedDate = convertUnixTimeStamp(currentTimeSeconds);

      // console.log(formattedDate);

      // const upcomingContest = response.data.result.filter(
      //   (contest: Contest) => contest.startTimeSeconds > currentTimeSeconds
      // );

      

      console.log("Response Data", response.data);

      setContestList(response.data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    fetchContestList();
  }, []);

  // useEffect(() => {
  //     console.log("Updated Contest List: ", contestList);
  // }, [contestList]);

  const convertDuration = (durationSeconds: number) => {
    const hours = Math.floor(durationSeconds / 3600);
    const minutes = Math.floor((durationSeconds % 3600) / 60);
    return `${hours} hours ${minutes} minutes`;
  };

  // const convertUnixTimeStamp = (startTimeSeconds: number) => {
  //   const date = new Date(startTimeSeconds * 1000);
  //   return date.toLocaleString();
  // };

  const convertUnixTimeStamp = (startTimeSeconds: number) => {
    if (!Number.isInteger(startTimeSeconds) || startTimeSeconds < 0) {
      return "Invalid Timestamp";
    }
    const date = new Date(startTimeSeconds * 1000);
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
    return date.toLocaleString();
  };


  return (
    <div className="flex">
      <div>
        <HamburgerMenu />
      </div>
      <div className="bg-red-50 w-full">
        <div>
          <TopNavigation />
        </div>
        <div className="text-black">
          <Table aria-label="Contest Calendar">
            <TableHeader>
              {/* {(column: any) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            )} */}
              {columns.map((column) => (
                <TableColumn key={column.key}>{column.label}</TableColumn>
              ))}
            </TableHeader>

            <TableBody items={contestList}>
              {(item: Contest) => (
                <TableRow key={item._id}>
                  {/* {(columnKey: any) => (
                  <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                )} */}
                  {columns.map((column) => (
                    <TableCell key={column.key}>
                      {column.key === "startTime"
                        ? convertUnixTimeStamp(item[column.key])
                        : column.key === "duration"
                        ? convertDuration(item[column.key])
                        : item[column.key]}
                    </TableCell>
                  ))}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import {
//   Table,
//   TableHeader,
//   TableColumn,
//   TableBody,
//   TableRow,
//   TableCell,
//   getKeyValue,
// } from "@nextui-org/react";

// const rows = [
//   {
//     key: "1",
//     name: "Tony Reichert",
//     role: "CEO",
//     status: "Active",
//   },
//   {
//     key: "2",
//     name: "Zoey Lang",
//     role: "Technical Lead",
//     status: "Paused",
//   },
//   {
//     key: "3",
//     name: "Jane Fisher",
//     role: "Senior Developer",
//     status: "Active",
//   },
//   {
//     key: "4",
//     name: "William Howard",
//     role: "Community Manager",
//     status: "Vacation",
//   },
// ];

// const columns = [
//   {
//     key: "name",
//     label: "NAME",
//   },
//   {
//     key: "role",
//     label: "ROLE",
//   },
//   {
//     key: "status",
//     label: "STATUS",
//   },
// ];

// export default function App() {
//   return (
//     <Table aria-label="Example table with dynamic content">
//       <TableHeader columns={columns}>
//         {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
//       </TableHeader>
//       <TableBody items={rows}>
//         {(item) => (
//           <TableRow key={item.key}>
//             {(columnKey) => (
//               <TableCell>{getKeyValue(item, columnKey)}</TableCell>
//             )}
//           </TableRow>
//         )}
//       </TableBody>
//     </Table>
//   );
// }
