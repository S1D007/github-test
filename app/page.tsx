"use client";
import useGithub from "@/store/useGithub";
import {
  Avatar,
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Link,
} from "@nextui-org/react";
import React, { useEffect } from "react";

export default function page() {
  const { users, getUsers } = useGithub();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <Table aria-label="Github Users">
        <TableHeader>
          <TableColumn>USERNAME</TableColumn>
          <TableColumn>URL</TableColumn>
          <TableColumn>asasURL</TableColumn>
        </TableHeader>
        <TableBody>
          {users.map(({ username, avatar_url, url }, idx: any) => {
            return (
              <TableRow key={idx}>
                <TableCell className="flex flex-row items-center space-x-3">
                  <Avatar src={avatar_url} />
                  <h1 className="font-bold capitalize">{username}</h1>
                </TableCell>
                <TableCell>
                  <Link color="primary" href={url}>
                    {url}
                  </Link>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
