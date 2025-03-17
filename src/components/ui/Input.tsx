import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";
import clsx from "clsx";

interface Props extends TextInputProps {
  label: string;
}

export default function Input({ label, className, ...rest }: Props) {
  return (
    <View className="flex gap-1">
      <Text className={"text-sm text-gray-600 font-bold"}>{label}</Text>
      <TextInput
        className={clsx(
          "p-[14px] w-full border border-gray-300 rounded-lg text-base font-normal text-gray-700",
          className
        )}
        {...rest}
      />
    </View>
  );
}
