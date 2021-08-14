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

export interface AuthProps {
  email: string;
  password: string;
}

export interface IUser {
  uid?: string;
  email?: string;
}
export interface IUpdatePasswordInput {
  password: string;
  confirm: string;
}

export interface IStory {
  title: string;
  body: string;
  user_id: string;
}

export interface IComment {
  body: string;
  user_id: string;
  story_id: string;
}
