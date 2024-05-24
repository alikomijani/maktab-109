export type UserType = {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  joinDate: string;
};

export const usersData: UserType[] = [
  {
    id: 1,
    username: "aliKomij",
    firstName: "Ali",
    lastName: "Komijani",
    joinDate: new Date().toISOString(),
  },
];
