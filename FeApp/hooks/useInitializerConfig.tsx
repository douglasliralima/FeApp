import i18nextConfig from "@/utils/language/i18nextConfig";
import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { useEffect, useState } from "react";

export default function useInitializerConfig() {
  const [loaded, setLoaded] = useState(false);

  const [loadedFonts] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loadedFonts) {
      i18nextConfig.initializeI18Next().then(() => {
        SplashScreen.hideAsync();
        setLoaded(true);
      });
    }
  }, [loadedFonts]);

  return { loaded };
}
