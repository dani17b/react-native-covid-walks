import React from "react";
import styles from "./UsersListStyles";
import { ScrollView, Text, View, Image } from "react-native";

const UsersList = props => {
  const { users, onClickUser } = props;

  return (
    <ScrollView style={styles.users} horizontal={true}>
      {users.map((user, i) => (
        <View style={styles.user} key={i} onClick={() => onClickUser(user)}>
          <Image
            style={[
              styles.image,
              {
                borderColor: user.status === "online" ? "#2ecc71" : "#D7D7D7"
              }
            ]}
            resizeMode={"contain"}
            source={{
              uri: user.image
            }}
          />
          <Text style={styles.name}>{user.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default UsersList;
