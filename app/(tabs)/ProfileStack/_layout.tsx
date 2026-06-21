import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="post" options={{ title: "Post" }} />
    </Stack>
  );
}
