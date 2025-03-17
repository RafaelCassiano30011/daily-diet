import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ArrowUpRight } from "phosphor-react-native";

export default function DietPercent() {
  return (
    <TouchableOpacity
      className="relative flex justify-center items-center rounded-lg bg-green-100 py-5 mb-10"
      activeOpacity={1}
    >
      <Text className="text-2xl font-bold text-gray-700">90,86%</Text>
      <Text className="text-sm text-gray-600 font-normal">das refeições dentro da dieta</Text>
      <View className="absolute right-2 top-2 flex">
        <ArrowUpRight color="#639339" size={24} />
      </View>
    </TouchableOpacity>
  );
}
