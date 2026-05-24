type WaitListCountResponse = {
  status: string;
  data: number;
};

type WaitListEntryResponse = {
  status: string;
  data: Array<{
    email: string;
    date: string;
  }>;
};
