import { __paths } from "@/utils";

export type ActionResponse = {
  fieldErrors?: {
    [key: string]: string[] | undefined;
  };
  error?: string;
  success?: string;
  data?: any;
};

export type ApiResponse<T = any> = {
  data: T;
  message: string;
  status: number;
  error?: string;
};

export type AppPath = (typeof __paths)[keyof typeof __paths];

export type ServiceResponse<T = any, E = any> = [T, null] | [null, E];

export type AppLayoutProps<T = any> = Readonly<{ children: React.ReactNode, params?: Promise<T> }>;
export type AppPageProps<T = any, K = any> = { params?: T, searchParams?: K };

export type ServiceStatus = "idle" | "loading" | "success" | "error";
