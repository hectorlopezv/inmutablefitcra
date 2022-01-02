import { ReferenceLine, AreaChart, XAxis,YAxis, Tooltip, Area, ResponsiveContainer } from "recharts";
import { formatter } from "../../util/table/tableUtils"
import { memo } from "react";
const styles = {
    tooltipWrapper: {
      background: "#444444",
      border: "none"
    },
    tooltip: {
      color: "#ebebeb"
    }
};

/**
 * Custom Chart from recharts library
 * @param {coinInfo}  formated coinInfo of a certain Crypto
 * @param {maxValue}  maxValue in the span of X months
 * @return {component} Chart with tooltip and maxValue line of a Selected Crypto in a span of X months
 */
const Chart = ({ coinInfo, maxValue }) => {

   
    return (
      <ResponsiveContainer maxHeight={900} aspect={1.1}> 
            <AreaChart data={coinInfo}>
                <XAxis  dataKey={"date"} />
                <YAxis
                    orientation={"left"}
                    // domain={['dataMin', 'dataMax']}
                    tickFormatter={(value) => formatter({ notation: "compact", compactDisplay: "short" }).format(value)} 
                />
          <Tooltip
            contentStyle={styles.tooltipWrapper}
            labelStyle={styles.tooltip}
            labelFormatter={value => `Date : ${value}`}
            formatter={(value) => formatter().format(value)} 
            />
                <ReferenceLine
                    y={maxValue}
                    yAxis=""
                    label="Max"
                    stroke="red"
                    strokeDasharray="3 3"
                />
          <Area
           type="monotone"
            dataKey="Total"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    )
}

export default memo(Chart);