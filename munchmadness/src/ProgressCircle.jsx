const cleanPercentage = (percentage) => {
    const isInvalid = !Number.isFinite(+percentage) || percentage < 0;
    const isTooHigh = percentage > 1;
    return isInvalid ? 0 : isTooHigh ? 1 : +percentage;
};

const Pie = ({currentVal, totalVal, units, colour, size = "20vw"}) => {

    const r = 70;
    const circum = 2 * Math.PI * r;
    const strokeWid = 200 * 0.1;
    const cleanP = cleanPercentage(currentVal/totalVal);
    const strokePercent = circum - ((cleanP) * circum);
    return (
        <svg viewBox="0 0 200 200" width={size} height={size}>
            <g transform="rotate(-90 100 100)">
                <circle
                    r={r}
                    cx={100}
                    cy={100}
                    fill="transparent"
                    stroke="lightgrey"
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
                    
                />
            </g>

            <text
                x="50%"
                y="50%"
                dominantBaseline="central"
                textAnchor="middle"
                fontSize="0.4em"
                fill="black"
            >
                {currentVal} {units}
            </text>
        </svg>

        
    );
};

export default Pie;