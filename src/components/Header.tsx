import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ArrowLeft } from "phosphor-react-native";
import useNavigation from "@hooks/useNavigation";

interface Props {
  title: string;
  color: "green" | "red" | "gray";
}

const colors = {
  green: "bg-green-100",
  red: "bg-red-100",
  gray: "bg-gray-300",
};

export default function Header({ title, color }: Props) {
  const navegation = useNavigation();

  return (
    <View className={`relative flex flex-row justify-center items-center px-6 py-14 ${colors[color]}`}>
      <TouchableOpacity onPress={() => navegation.canGoBack() && navegation.goBack()} className="absolute left-6">
        <ArrowLeft />
      </TouchableOpacity>
      <Text className="text-gray-700 text-lg font-bold">{title}</Text>
    </View>
  );
}
