import React from "react";
import { Image, View } from "react-native";

import styles from "./styles";

import PrvaKomponenta, { DrugaKomponenta } from "./src/PrvaKomponenta";

// import fetchedData from "./fetchedData.json";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: 400, height: 400 }}
        source={{
          uri:
            "https://images.unsplash.com/photo-1562185017-5571340aab8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        }}
      ></Image>

      <KomoponentaKojaRendaListu
        list={require("./fetchedData.json")}
      ></KomoponentaKojaRendaListu>
    </View>
  );
}

function KomoponentaKojaRendaListu(props) {
  const list = props.list;
  return (
    <View>
      {list.map(element => {
        return <PrvaKomponenta key={element.message} tekst={element.message} />;
      })}
    </View>
  );
}
