import React from "react";
import { Text } from "react-native";

function PrvaKomponenta(props) {
  console.log("ja sam pozvan");
  return <Text>{props.tekst}</Text>;
}

export default PrvaKomponenta;
