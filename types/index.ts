import { __paths } from "@/utils";

export type ActionResponse = {
  fieldErrors?: {
    [key: string]: string[] | undefined;
  };
  error?: string;
  success?: string;
  data?: any;
};

export type AppPath = (typeof __paths)[keyof typeof __paths];
