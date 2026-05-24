import api from "@/lib/api";

export const getWaitlistedCount = async () => {
  const res = await api.get<WaitListCountResponse>("/v1/waitlist/count");
  return res.data.data;
};

export const getWaitlistEntries = async () => {
  const res = await api.get<WaitListEntryResponse>("/v1/waitlist/entries");
  return res.data.data;
};
