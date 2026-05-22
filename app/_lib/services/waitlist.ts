import api from "@/lib/api";

export const getWaitlistedCount = async () => {
  const res = await api.get<WaitListCountResponse>("/v1/waitlist/count");
  return res.data.data;
};
