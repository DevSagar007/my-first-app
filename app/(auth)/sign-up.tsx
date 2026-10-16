import { Link } from "expo-router";
import { Text, View } from "react-native";

const SignUp = () => {
  return (
    <View>
      <Text>sign up</Text>
      <Link href="/(auth)/sign-In"></Link>
    </View>
  );
};

export default SignUp;
