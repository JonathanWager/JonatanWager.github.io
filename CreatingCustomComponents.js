import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { styles } from "../styles";
import { useState } from "react";

/* TODO: DEFINE THE CART ITEM COMPONENT HERE */

/* Set labPart variable to 5, to view this part of the lab */
export default function CreatingCustomComponents() {
  const [value, newValue] = useState(0)
  const [value2, newValue2] = useState(0)
  const [value3, newValue3] = useState(0)
  const [item, setItem] = useState({everything:0})
  const CustomComponent = () => {
    return (
      <View style={{ ...styles.section, backgroundColor: "yellow",            flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",}}>
        <Text>Milk   </Text>
        <Button
          title="-"
          onPress={() => {
            newValue((previusValue)=> previusValue-1);
            setItem({...item, everything:item.everything-1})
          }}
          />
          <Text style={{ ...styles.bodyText }}>{value}</Text>
          <Button title="+"
          onPress={() => {
            newValue((previusValue)=> previusValue+1);
            setItem({...item, everything:item.everything+1})
          }}
          />
      </View>
    );
  }

  const CustomComponent2 = () => {
    return (
      <View style={{ ...styles.section, backgroundColor: "yellow",            flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",}}>
        <Text>Bread   </Text>
        <Button
          title="-"
          onPress={() => {
            newValue2((previusValue2)=> previusValue2-1);
            setItem({...item, everything:item.everything-1})
          }}
          />
          <Text style={{ ...styles.bodyText }}>{value2}</Text>
          <Button title="+"
          onPress={() => {
            newValue2((previusValue2)=> previusValue2+1);
            setItem({...item, everything:item.everything+1})
          }}
          />
      </View>
    );
  }

  const CustomComponent3 = () => {
    return (
      <View style={{ ...styles.section, backgroundColor: "yellow",            flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",}}>
        <Text>Eggs   </Text>
        <Button
          title="-"
          onPress={() => {
            newValue3((previusValue3)=> previusValue3-1);
            setItem({...item, everything:item.everything-1})
          }}
          />
          <Text style={{ ...styles.bodyText }}>{value3}</Text>
          <Button title="+"
          onPress={() => {
            newValue3((previusValue3)=> previusValue3+1);
            setItem({...item, everything:item.everything+1})
          }}
          />
      </View>
    );
  }
  
  return (
    <SafeAreaView style={styles.content}>
      <ScrollView>
        <Text style={styles.headerText}>Creating Custom Components</Text>

        <View style={{ ...styles.section, backgroundColor: "#ffeb7a" }}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            Shopping Cart
          </Text>
          {/* TODO: ADD THE CART ITEMS BELOW*/}
          <CustomComponent/>
          <CustomComponent2/>
          <CustomComponent3/>
          <Text>{item.everything}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.bodyText}>
            <Text style={{ fontWeight: "bold" }}>Your Task: </Text>
            {"\n\n"}
            1. Create a custom component called CartItem. It should have a text
            that displays the item name, and the amount of items with a button
            to increase and decrease the amount.
            {"\n\n"}
            2. Create three cart item components, one for Milk, bread and eggs
            with initial values of 0. Take a look at the 'shopping cart items'
            image in the assets folder to see what it should look like in the
            end.
            {"\n\n"}
            <Text style={{ fontWeight: "bold" }}>Bonus: </Text>Display the total
            number of items in the cart. Think about how you could use a
            dictionary state variable to do this.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
