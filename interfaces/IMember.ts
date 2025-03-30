export interface IMember {
  id: string;
  name: {
    first: string;
  };
  amount: number;
}

const Member1Mock: IMember = {
  id: "1",
  name: {
    first: "Aksel",
  },
  amount: 50,
};

const Member2Mock: IMember = {
  id: "2",
  name: {
    first: "Samuel",
  },
  amount: 100,
};

export const MembersMock: IMember[] = [Member1Mock, Member2Mock];
