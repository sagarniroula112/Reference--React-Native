<SafeAreaView>
  <Text>{firstName}</Text>
  <View style={{ marginTop: 50 }}>
    <TextInput
      secureTextEntry={true}
      // clearButtonMode="always"
      keyboardType="numeric"
      maxLength={50}
      onChangeText={(text) => setFirstName(text)}
      style={{ borderBottomColor: "#ccc", borderBottomWidth: 1 }}
      placeholder="First Name"
    />
  </View>
</SafeAreaView>;
