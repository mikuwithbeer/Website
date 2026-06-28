export type PageName = "home" | "education" | "code" | "social";

export type Page = {
  name: PageName;
  icon: string;
};

export type Code = {
  title: string;
  link: string;
  description?: string;
};

export type Codes = Code[];
