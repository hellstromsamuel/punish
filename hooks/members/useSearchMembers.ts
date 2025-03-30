import { useNavigation } from "expo-router";
import React from "react";
import { MembersMock } from "../../interfaces/IMember";
import groupMembersByName from "../../utils/members/groupMembersByName";

function useSearchMembers() {
  const navigation = useNavigation();
  const [search, setSearch] = React.useState("");

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        cancelButtonText: "Avbryt",
        placeholder: "Søk",
        onChangeText: (event: any) => setSearch(event.nativeEvent.text),
      },
    });
  }, [navigation]);

  const filteredMembers = React.useMemo(() => {
    const members = groupMembersByName(MembersMock);
    return members.filter((member) => {
      return member.data.find((member) => {
        return member.name.first.toLowerCase().includes(search.toLowerCase());
      });
    });
  }, [search]);

  return {
    filteredMembers,
  };
}

export default useSearchMembers;
