import { View, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import clsx from "clsx";

interface Props extends TouchableOpacityProps {
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  variant?: "primary" | "secondary" | "neutral";
}

export default function Button({ title, Icon, variant: variantKey = "primary", ...rest }: Props) {
  const variant = {
    primary: "bg-gray-600 text-red-500",
    secondary: "bg-secondary",
    neutral: "bg-gray-200 text-gray-700",
  };

  const variantText = {
    primary: "text-white",
    secondary: "text-white",
    neutral: "text-gray-700",
  };

  return (
    <TouchableOpacity
      className={clsx(`flex flex-grow flex-row justify-center items-center gap-3 rounded-md py-4`, variant[variantKey])}
      activeOpacity={0.9}
      {...rest}
    >
      {Icon && <Icon />}
      <Text className={clsx("w-fit text-center font-bold text-sm", variantText[variantKey])}>{title}</Text>
    </TouchableOpacity>
  );
}
