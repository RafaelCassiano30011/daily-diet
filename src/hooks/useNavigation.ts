import { useNavigation as useNavigationNative } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "@routes/index";

const useNavigation = () => {
  return useNavigationNative<AppNavigatorRoutesProps>();
};

export default useNavigation;
