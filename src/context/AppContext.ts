import { createContext } from "react";
import type { AppContextType } from "../sharedTypes/types";

export const AppContext = createContext<AppContextType | null>(null);
