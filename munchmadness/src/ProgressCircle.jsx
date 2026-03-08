const cleanPercentage = (percentage) => {
    const isInvalid = !Number.isFinite(+percentage) || percentage < 0;
    const isTooHigh = percentage > 1;
    return isInvalid ? 0 : isTooHigh ? 1 : +percentage;
};

const Pie = ({currentVal, totalVal, units, colour}) => {

    const r = 70;
    const circum = 2 * Math.PI * r;
    const strokeWid = 200 * 0.1;
    const cleanP = cleanPercentage(currentVal/totalVal);
    const strokePercent = circum - ((cleanP) * circum);
    return (
        <svg viewBox="0 0 200 200" width="100%" height="100%">
            <g transform="rotate(-90 100 100)">
                <circle
                    r={r}
                    cx={100}
                    cy={100}
                    fill="transparent"
                    stroke="#d0ddfc"
                    strokeWidth={strokeWid}
                />

                <circle
                    r={r}
                    cx={100}
                    cy={100}
                    fill="transparent"
                    stroke={strokePercent !== circum ? colour : ""}
                    strokeWidth={strokeWid}
                    strokeDasharray={circum}
                    strokeDashoffset={strokePercent}
                    strokeLinecap="round"
                />
            </g>

            <text
                x="50%"
                y="45%"
                dominantBaseline="central"
                textAnchor="middle"
                fontSize="1.9em" 
                fill="#2d426e"
            >
                {currentVal || 0}{units !== "Calories" ? "g" : ""}
            </text>

            <text
                x="50%"
                y="60%"
                dominantBaseline="central"
                textAnchor="middle"
                fontSize="1em"
                fill="#2d426e"
            >
                {units}
            </text>
        </svg>

        
    );
};

export default Pie;