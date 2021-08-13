export interface FontProps {
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
}

export interface StyleSheetProps {
  color?: string;
  fontStyle?: FontProps;
  backgroundColor?: string;
  textAlign?: textAlignment;
  borderStyle?: BorderStyle;
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginStart?: number;
}

export interface BorderStyle {
  borderStyle?: "solid";
  borderWidth?: number;
  borderColor?: string;
}
