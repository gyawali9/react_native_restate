import SignIn from "@/app/sign-in";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg my-10">Welcome to Restate</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/profile">Profile</Link>

      <Link href="/explore">Explore</Link>
      <Link href="/properties/5">SiProperty</Link>
    </View>
  );
}
