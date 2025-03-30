import { IMember } from "../../interfaces/IMember";

const groupMembersByName = (
  members: IMember[]
): {
  title: string;
  data: IMember[];
}[] => {
  const groupedMembers: { [key: string]: IMember[] } = {};

  members.forEach((fine) => {
    const firstLetter = fine.name.first.charAt(0).toUpperCase();
    if (!groupedMembers[firstLetter]) {
      groupedMembers[firstLetter] = [];
    }
    groupedMembers[firstLetter].push(fine);
  });

  const groupedMembersArray = Object.entries(groupedMembers).map(
    ([title, data]) => ({
      title,
      data,
    })
  );

  const sortedByTitle = groupedMembersArray.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return sortedByTitle;
};

export default groupMembersByName;
