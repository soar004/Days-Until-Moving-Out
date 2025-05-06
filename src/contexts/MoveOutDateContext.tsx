import React, { createContext, ReactNode, useMemo } from "react";

// ① createContext, but do NOT export the hook from this file
export const MoveOutDateContext = createContext<Date | null>(null);

// ② provider is the only export in here
//     – default export must be the React component itself
const MoveOutDateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const moveOutDate = useMemo(() => new Date("2025-07-01T12:00:00"), []);
  // const moveOutDate = useMemo(() => new Date(), []);

  return (
    <MoveOutDateContext.Provider value={moveOutDate}>
      {children}
    </MoveOutDateContext.Provider>
  );
};

export default MoveOutDateProvider;
