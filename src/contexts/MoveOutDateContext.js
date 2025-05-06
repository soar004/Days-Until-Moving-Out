import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useMemo } from "react";
// ① createContext, but do NOT export the hook from this file
export const MoveOutDateContext = createContext(null);
// ② provider is the only export in here
//     – default export must be the React component itself
const MoveOutDateProvider = ({ children, }) => {
    const moveOutDate = useMemo(() => new Date("2025-07-01T12:00:00"), []);
    // const moveOutDate = useMemo(() => new Date(), []);
    return (_jsx(MoveOutDateContext.Provider, { value: moveOutDate, children: children }));
};
export default MoveOutDateProvider;
