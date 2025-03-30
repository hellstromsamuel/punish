import { IFine } from "../../interfaces/IFine";

const groupFinesByFirstLetter = (
  fines: IFine[]
): {
  title: string;
  data: IFine[];
}[] => {
  const groupedFines: { [key: string]: IFine[] } = {};

  fines.forEach((fine) => {
    const firstLetter = fine.name.charAt(0).toUpperCase();
    if (!groupedFines[firstLetter]) {
      groupedFines[firstLetter] = [];
    }
    groupedFines[firstLetter].push(fine);
  });

  const groupedFinesArray = Object.entries(groupedFines).map(
    ([title, data]) => ({
      title,
      data,
    })
  );

  const sortedByTitle = groupedFinesArray.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return sortedByTitle;
};

export default groupFinesByFirstLetter;
