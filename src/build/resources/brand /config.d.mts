type Texts = {
  [key in string]?: {
    appName: string;
    appDescription?: string;
    supplyResultsText: string;
    supplyResultsFootnotes: string;
    coefficientTypes: Record<string, string>;
  };
};

type Config = {
  fbLink?: string;
  enabledLocales: string[];
  // one from enabledLocales; if none, detected automatically by system
  defaultLocale?: string;
  url?: string;
}

export declare const texts: Texts;
export declare const config: Config;
