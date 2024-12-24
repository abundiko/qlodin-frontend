export type ActionResponse = {
    fieldErrors?: {
      [key:string]:string[]|undefined;
    };
    error?: string;
    success?: string;
    data?: any;
  }