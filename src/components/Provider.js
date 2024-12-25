"use client";
import { QueryClient ,QueryClientProvider } from "@tanstack/react-query";

import React from 'react'
function Provider({children}) {
    const query = new QueryClient();
  return (
    <QueryClientProvider client={query}>
      {children}
    </QueryClientProvider>
  )
}

export default Provider
