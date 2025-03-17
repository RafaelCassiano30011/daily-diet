import { Text, View } from "react-native";
import React from "react";
import Header from "@components/Header";
import Input from "@components/ui/Input";
import Button from "@components/ui/Button";

export default function NewStack() {
  return (
    <View className="flex-1 w-full">
      <Header title="Nova refeição" color="gray" />

      <View className="w-full px-6 py-10 rounded-[20px] -mt-6 bg-white flex-1 gap-6">
        <Input label="Nome" />
        <Input label="Descrição" multiline textAlignVertical={"top"} className="min-h-[120px]" />

        <View className="gap-4">
          <Text className="text-sm text-gray-600 font-bold">Está dentro da dieta?</Text>
          <View className="flex flex-row justify-between items-center gap-2">
            <Button Icon={() => <View className="w-2 h-2 rounded-full bg-green-300" />} title="Sim" variant="neutral" />
            <Button Icon={() => <View className="w-2 h-2 rounded-full bg-red-300" />} title="Não" variant="neutral" />
          </View>
        </View>

        <View className="mt-auto">
          <Button title="Cadastrar refeição" />
        </View>
      </View>
    </View>
  );
}
