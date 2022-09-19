import { StyleSheet, View } from "react-native";
  
  const Flex = ({ Flex }) => (
  <View style={styles.container}>
  <View style={styles.item}>
        <View style={styles.column1}>
             <View style={styles.Flex}><Text>{'title'}</Text></View>
             <View style={styles.title}><Text>{'item'}</Text></View>
             <View style={styles.title}><Text>{'item3'}</Text></View>
        </View>
      
  </View>
  </View>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start' // if you want to fill rows left to right
  },
  item: {
    width: '50%' // is 50% of container width
  }
})