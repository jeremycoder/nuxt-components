export type NxFormInput = {
  label?: string;
  id: string;
  type?:
    | "input:text"
    | "input:password"
    | "input:email"
    | "input:number"
    | "textarea"
    | "select";
  options?: Array<string>; // Used for select input
  rows?: number; // For textarea
  disabled?: boolean;
  show?: boolean;
  value?: string;
};

export type NxLink = {
  name: string;
  link?: string;
  disabled?: boolean;
  show?: boolean;
  hasBorder?: boolean;
  showChildren?: boolean;
  children?: Links;
  bold?: boolean;
  group?: string;
};

export type NxLinks = Array<NxLink>;
