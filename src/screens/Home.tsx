import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import React from "react";
import HeaderHome from "@components/HeaderHome";
import { Plus } from "phosphor-react-native";
import DietPercent from "@components/DietPercent";
import Button from "@components/ui/Button";
import useNavigation from "@hooks/useNavigation";

export default function Home() {
  const navegation = useNavigation();

  return (
    <View className="flex-1">
      <ScrollView className="flex-1 px-6 relative" showsVerticalScrollIndicator={false}>
        <HeaderHome />

        <DietPercent />
        <View className="mb-8">
          <Text className="text-base text-left font-regrular mb-2">Refeições</Text>
          <Button
            onPress={() => {
              navegation.navigate("newSnack");
            }}
            Icon={() => <Plus color="white" size={18} />}
            title="Nova refeição"
          />
        </View>
      </ScrollView>
    </View>
  );
}
