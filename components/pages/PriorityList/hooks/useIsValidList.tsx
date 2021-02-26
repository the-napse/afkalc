import IHeroDetails from "../../../../types/IHeroDetails";

interface IList {
  type: string;
  value: number;
}

export default function useIsValidList(priorityList: IList, theHeroRequirement: IHeroDetails, theHeroLevels?: IHeroDetails) {
  let isValidListSi = false;

  const priorityType = priorityList.type || "";
  const priorityValue = priorityList.type || 0;

  const heroRequirementAscend = theHeroRequirement.ascend || 0;
  const heroRequirementSi = theHeroRequirement.si || 0;
  const heroRequirementFi = theHeroRequirement.fi || 0;

  const hasSelfRequirement =
    heroRequirementAscend > 0 || heroRequirementSi > 0 || heroRequirementFi > 0;

  // If the list has no type or no value but the character has requirement. The list should not be invalid
  if ((priorityType || priorityValue === 0) && hasSelfRequirement) {
    return true;
  }

  // If the user has no levels for this character, it could not be valid
  if (theHeroLevels === undefined) {
    return false;
  }

  if (priorityList.type === "SI") {
    if (theHeroLevels.si === undefined) {
      isValidListSi = false;
    } else if (priorityList.value === undefined) {
      isValidListSi = true;
    } else {
      isValidListSi = priorityList.value <= theHeroLevels.si;
    }
  }

  let isValidListFi = false;
  if (priorityList.type === "FI") {
    if (theHeroLevels.inn === undefined) {
      isValidListFi = false;
    } else if (priorityList.value === undefined) {
      isValidListFi = true;
    } else {
      isValidListFi = priorityList.value <= theHeroLevels.inn;
    }
  }

  let isValidListAscend = false;
  if (priorityList.type === "ASCEND") {
    if (theHeroLevels.ascend === undefined) {
      isValidListAscend = false;
    } else if (priorityList.value === undefined) {
      isValidListAscend = true;
    } else {
      isValidListAscend = priorityList.value <= theHeroLevels.ascend;
    }
  }

  const isListValid = isValidListSi || isValidListFi || isValidListAscend;

  return isListValid;
}
