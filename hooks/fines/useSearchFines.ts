import { useNavigation } from "expo-router";
import React from "react";
import groupFinesByFirstLetter from "../../utils/fines/groupFinesByFirstLetter";
import { FinesMock } from "../../interfaces/IFine";

function useSearchFines() {
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

  const filteredFines = React.useMemo(() => {
    const groupedFines = groupFinesByFirstLetter(FinesMock);
    return groupedFines.filter((fine) => {
      return fine.data.find((fine) => {
        return fine.name.toLowerCase().includes(search.toLowerCase());
      });
    });
  }, [search]);

  return {
    filteredFines,
  };
}

export default useSearchFines;
