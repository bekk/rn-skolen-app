import React from "react";
import { ViewProps, View } from "react-native";

export const Box = React.forwardRef(
    (props: ViewProps, ref: React.LegacyRef<View>) => {
      // some additional logic
      return <View ref={ref} {...props} />;
    }
  );