export type PageName = "home" | "education" | "code" | "social";

export type Page = {
  name: PageName;
  icon: string;
};

export type Code = {
  title: string;
  link: string;
  description: string | null;
};

export type Codes = Code[];
