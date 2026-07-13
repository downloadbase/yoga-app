import {
  GiLotus,
  GiBodySwapping,
  GiLungs,
  GiMeditation,
  GiHeartWings,
  GiFire,
  GiMuscleUp,
  GiOfficeChair,
  GiGraduateCap,
  GiPerson,
  GiBrain,
  GiPlantSeed,
  GiCompass,
  GiEarthAmerica,
  GiBackPain,
  GiMoon,
  GiWeight,
  GiShield,
  GiBodyBalance,
} from "react-icons/gi";

const ICONS = {
  GiLotus,
  GiBodySwapping,
  GiLungs,
  GiMeditation,
  GiHeartWings,
  GiFire,
  GiMuscleUp,
  GiOfficeChair,
  GiGraduateCap,
  GiPerson,
  GiBrain,
  GiPlantSeed,
  GiCompass,
  GiEarthAmerica,
  GiBackPain,
  GiMoon,
  GiWeight,
  GiShield,
  GiBodyBalance,
};

export default function getIcon(name) {
  return ICONS[name] || GiLotus;
}
