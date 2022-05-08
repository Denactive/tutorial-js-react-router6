import { createContext } from "react";

const AuthCtx: React.Context<[boolean, (value: boolean) => void]> = createContext([false as boolean, (value: boolean) => {}]); 
export default AuthCtx;
