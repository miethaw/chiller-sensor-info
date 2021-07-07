import React, { Component } from 'react';
import chillerColors from "../../../config/mycolor"
import font from '../../../config/myFonts';
import LineChartComponent from './lineChart1';
// import LoadingView from '../common/LoadingView'
import DateRangePicker from '../components/DateRangePicker'
import moment from 'moment';
import { format } from 'date-fns'



const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

class BottomPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'dark',
            title: 'CP-Cold Room (ASRS Freezer 1)',
            active: true,
            startDate: moment().format("YYYY-MM-DD"),
            endDate: moment().format("YYYY-MM-DD"),
        };
    }

    // setData = (description) => {
    //     let isFreezer = description.includes("ASRS Freezer");
    //     this.setState({ title: description, active: isFreezer, graphData: this.getGraphData(isFreezer) })
    // }

    // componentDidMount() {
    //     let isFreezer = this.props.data.length > 0 ? this.props.data[0].description.includes("ASRS Freezer") : false;
    //     this.setState({ title: this.props.data.length > 0 ? this.props.data[0].description : '', active: isFreezer, graphData: this.getGraphData(isFreezer) })
    // }

    // getGraphData = (isFreezer) => {
    //     return Array(24).fill(null).map((d, i) => (
    //         isFreezer ? {
    //             Power: getRandomInt(100),
    //             date: i < 10 ? `0${i}:00` : `${i}:00`,
    //             Temperature: getRandomInt(30)
    //         }
    //             : {
    //                 Power: getRandomInt(100),
    //                 date: i < 10 ? `0${i}:00` : `${i}:00`
    //             }
    //     ))
    // }

    render() {
        const { deviceLists,theme, data, width, _handleDeviceSelect, activeDevice, type, isLoading, handleDateRange, startDate, endDate, lineColor, resetDate } = this.props
        return (
            <div className="px-2 d-flex flex-column">
                <div className="d-flex text-white p-2">
                    <span style={{ fontWeight: 'bold', fontSize: font.heading_2 }}>{this.props.title}</span>
                </div>
                <div className="px-3 pt-1" style={{
                    background: chillerColors[theme].background1,
                    borderRadius: '8px',
                    boxShadow: '#141c42 0px 1px 3px 1px'
                }}>
                    <div className="pl-3 d-flex justify-content-between" style={{ color: '#EBE1E1', display: 'flex', alignItems: 'center', height: 70 }}>
                        <div className="dropdown">
                            <div style={{ border: `1px solid ${chillerColors[theme].graph}`, borderRadius: 8, background: chillerColors[theme].background1, fontSize: font.heading_2, color: chillerColors[theme].bodyText}}
                                className="btn dropdown-toggle caret" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span>
                                    {activeDevice ? activeDevice : ''}
                                </span>
                            </div>
                            {/* <button type="button" className="border border-success btn dropdown-toggle "><i className="fab fa-caret" aria-hidden="true"></i></button> */}


                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton" style={{ width: 230, borderRadius: 5 }}>
                                <li className="dropdown-header disabled" style={{ fontSize: font.heading_2 , padding: '0px 5px' }}>Select Device</li>
                                <div className="dropdown-divider"/>
                                
                                {
                                    this.props.deviceLists.map((d, i) => {
                                        return <>
                                            <li className='dropdown-item' style={{  cursor: 'pointer', padding: '0px 5px', fontSize: font.heading_2 }} onClick={() => _handleDeviceSelect(d.deviceName,this.props.type)}>{d.deviceName}</li>
                                            <div className={this.props.deviceLists.length-1 === i ? '' : 'dropdown-divider'}/>
                                        </>
                                    })
                                }
                                        
                            </ul>
                        </div>
                        
                        <div className="pt-1 " style={{ border: `1px solid ${chillerColors[theme].graph}`, borderRadius:10 }}>
                            <DateRangePicker
                                theme={theme}
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onDateSelect={(d1, d2) => {
                                    this.setState({
                                        startDate: format(new Date(d1), 'yyyy-MM-dd'),
                                        endDate: format(new Date(d2), 'yyyy-MM-dd'),
                                    },
                                    //  () => {
                                    //     handleDateRange({
                                    //         dateRange: {
                                    //             startDate: this.state.dailyStartDate,
                                    //             endDate: this.state.endDate
                                    //         },
                                    //         type:type
                                    //     })
                                    // }
                                        //  console.log("StartDate", this.state.dailyStartDate, this.state.endDate)
                                    );
                                }}
                                resetDate={(d1,d2)=>
                                this.setState({
                                    startDate: moment().format("YYYY-MM-DD"),
                                    endDate: moment().format("YYYY-MM-DD"),
                                })}

                            />
                        </div>
                    </div>

                    {/* <LoadingView isLoading={isLoading} /> */}

                    <LineChartComponent
                        width={width}
                        data={this.props.graphData}
                        tmpData={this.props.tmpGraphData}
                        theme={theme} power_unit={"Hz"}
                        temperature_unit={this.props.yLabel}
                        yLabel={this.props.yLabel}
                        xLabel="Time"
                        keys={this.props.keys}
                        lineColor={lineColor}
                    />
                    
                </div>
            </div>
        )
    }
}

export default BottomPanel;