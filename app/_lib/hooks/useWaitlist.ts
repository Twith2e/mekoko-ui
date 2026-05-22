"use client";

import { useQuery } from "@tanstack/react-query";
import { getWaitlistedCount } from "../services/waitlist";

export const useWaitListedCount = () =>
  useQuery({
    queryKey: ["waitlist", "count"],
    queryFn: getWaitlistedCount,
  });
