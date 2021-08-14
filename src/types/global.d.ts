declare module "react-native-keyboard-aware-scroll-view";

type textAlignment =
  | "auto"
  | "left"
  | "right"
  | "center"
  | "justify"
  | undefined;

type border = "solid" | "dotted" | "dashed" | undefined;

type ImageSource = string | {};

type ResizeMode = "cover" | "contain" | "stretch" | "repeat" | "center";

type ResponseError = {
  path: string;
  message: string;
};

type ResponseUser = {
  uid: string;
};
