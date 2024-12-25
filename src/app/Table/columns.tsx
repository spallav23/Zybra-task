"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type University = {
  name: String
  country: String
  web_pages: string
}

export const columns: ColumnDef<University>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "web_pages",
    header: "Website",
  },
]
