import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { useMoveOutDate } from "../../hooks/useMoveOutDate";
import { useCountdown } from "../../hooks/useCountdown";
const pad = (n) => String(n).padStart(2, "0");
const Counter = () => {
    const moveOutDate = useMoveOutDate();
    const { timeLeft } = useCountdown(moveOutDate);
    const { days, hours, minutes, seconds } = timeLeft;
    const units = [
        { label: "dager", value: days },
        { label: "timer", value: hours },
        { label: "min", value: minutes },
        { label: "sek", value: seconds },
    ];
    return (_jsxs("div", { className: "mb-4", children: [_jsx("h4", { className: "fs-4 mb-4", children: "Tid igjen \u00E5 holde ut med Ragnhild" }), _jsx("div", { className: "d-inline-flex gap-3", children: units.map(({ label, value }) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "fs-3 fw-bold", children: pad(value) }), _jsx("div", { className: "small text-uppercase text-muted", children: label })] }, label))) })] }));
};
export default React.memo(Counter);
