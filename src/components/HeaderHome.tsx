import { Image, View } from "react-native";
import React from "react";
import Logo from "@assets/Logo.svg";
import ProfileImage from "@assets/profile.png";

export default function HeaderHome() {
  return (
    <View className="flex flex-row items-center justify-between pt-16 mb-8">
      <Logo />

      <Image className="w-10 h-10 rounded-full border border-gray-600" source={ProfileImage} />
    </View>
  );
}
