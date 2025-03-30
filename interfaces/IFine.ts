export interface IFine {
  id: string;
  name: string;
  amount: number;
}

export const Fine1Mock: IFine = {
  id: "1",
  name: "Forsentkomming",
  amount: 50,
};

export const Fine2Mock: IFine = {
  id: "2",
  name: "Droppe fellesoppgaver",
  amount: 100,
};

export const Fine3Mock: IFine = {
  id: "3",
  name: "Spise med hodeplagg",
  amount: 50,
};

export const Fine4Mock: IFine = {
  id: "4",
  name: "Ikke fått bot - bot",
  amount: 100,
};

export const Fine5Mock: IFine = {
  id: "5",
  name: "Grisebot",
  amount: 69,
};

export const Fine6Mock: IFine = {
  id: "6",
  name: "Idiotbot",
  amount: 69,
};

export const Fine7Mock: IFine = {
  id: "7",
  name: "Tysterabatt",
  amount: -10,
};

export const FinesMock: IFine[] = [
  Fine1Mock,
  Fine2Mock,
  Fine3Mock,
  Fine4Mock,
  Fine5Mock,
  Fine6Mock,
  Fine7Mock,
];
