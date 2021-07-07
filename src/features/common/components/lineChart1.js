import React, { useState } from 'react'
import {
    LineChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line
} from 'recharts';
import color from "../../../config/mycolor"
import font from '../../../config/myFonts';
import CustomTooltip from './customTootip';

const LineChartComponent = (props) => {
    // const [stroke, setStroke] = useState({CT1:2,CT2:2,CT3:2});
    const [stroke, setStroke] = useState({});

    const { data, theme, width, power_unit, temperature_unit } = props
    // const props.tmpData = data !== null ? data : [];
    const minWidth = 1140
    const intervalValue = props.tmpData !== null ? Math.ceil(props.tmpData.length / 9) : null
    let windowWidth = window.innerWidth;
    // console.log("length", props.tmpData.length, intervalValue)

    const changeStroke = (item, strokeWidth) => {
        let itemStroke = stroke[item] = strokeWidth;
        setStroke({ ...stroke, itemStroke })
    }
    // const coolingTowerColors = [color[theme].blue,"#FF00B7", "#B7FF00"]
    const keys = (props.tmpData !== null && props.tmpData.length > 0) ? Object.keys(props.tmpData[0]).filter(d => !d.includes("date")).sort() : []

    return (
        <div className="col p-0 m-0">
            {/* {
                props.tmpData !== null && props.tmpData.length === 0 ?
                    <div style={{ position: "absolute", }} className="w-100 h-100 text-center pt-5">
                        <div>
                            <Nodata Width={80} Height={80} Color1={color[theme].labelSideBarRight} />
                        </div>
                        <div className="pt-2" style={{ fontSize: font.labels, color: color[theme].labelSideBarRight, }}>
                            {"There is no data"}
                        </div>
                    </div>
                    :
                    null
            } */}
            <ResponsiveContainer  /*aspect={aspect === undefined ? 16 / 5 : aspect}*/ width="100%" height={width !== undefined && width < minWidth ? 300 : 300} >

                <LineChart
                    width={500}
                    height={300}
                    data={props.tmpData}
                    margin={{
                        top: 5, right: 30, left: 5, bottom: 15,
                    }}
                >
                    <CartesianGrid stroke={'#41455F'} strokearray="3 3" />
                    <XAxis
                        stroke={"#A9A5B3"}
                        dataKey="date"
                        interval={intervalValue}
                        angle={windowWidth < 600 ? -60 : 0}
                        dy={windowWidth < 600 ? 15 : 5}
                        dx={windowWidth < 600 ? -10 : 0}
                        tickSize={0}
                        label={{ value: "TIME", dy: windowWidth < 600 ? 40 : 20, fill: "#A9A5B3", fontSize: font.heading_3 }}
                    />
                    <YAxis
                        tickSize={0}
                        dy={-1}
                        stroke={"#A9A5B3"}
                    // label={{ value: unit, angle: -90, position: 'insideLeft', fill: color[theme].bodyText, fontSize: font.labels}}
                    />
                    <Tooltip content={<CustomTooltip theme={theme} power_unit={power_unit} temperature_unit={temperature_unit} />} />
                    <Legend align={'right'} type={"line"} verticalAlign={'top'} iconType={'plainline'} iconSize={26} />
                    {
                        keys.map((k, i) => {
                            if (!k.includes("###"))
                                return <Line key={i} dot={false} //onMouseOver={()=>changeStroke(k,5)}
                                    type="monotone" dataKey={k} //onMouseLeave={()=>changeStroke(k,2)}
                                    stroke={ color[theme].blue}
                                    // stroke={k === "Temperature" ? "#FB0606" : k === "Power" ? color[theme].blue : "#B7FF00"}
                                    strokeWidth={stroke[k] ? stroke[k] : 2} style={{ cursor: 'pointer' }} />
                            else
                                return <Line key={i} dot={false} type="monotone" dataKey={k} stroke="#FF8C00" strokeWidth={2} style={{ cursor: 'pointer' }} />
                        })
                    }
                </LineChart>

            </ResponsiveContainer>
        </div>

    )
}

export default LineChartComponent;