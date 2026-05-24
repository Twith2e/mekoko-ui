"use client";

import { useQuery } from "@tanstack/react-query";
import { getWaitlistedCount, getWaitlistEntries } from "../services/waitlist";

export const useWaitListedCount = () =>
  useQuery({
    queryKey: ["waitlist", "count"],
    queryFn: getWaitlistedCount,
  });

export const useWaitlistEntries = () =>
  useQuery({
    queryKey: ["waitlist", "entries"],
    queryFn: getWaitlistEntries,
  });
