import { SplashScreen, Stack } from "expo-router";
import useInitializerConfig from "@/hooks/useInitializerConfig";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { loaded } = useInitializerConfig();

  if (!loaded) {
    return null;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
