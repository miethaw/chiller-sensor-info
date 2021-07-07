import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

import 'react-date-range/dist/styles.css';//
import 'react-date-range/dist/theme/default.css';//
import { withTheme } from '../features/common/hoc/withTheme'
import chillerColors from "../config/mycolor.js"
import myFonts from '../config/myFonts.js';
import BottomPanel from '../features/common/components/bottomPanel1';
import KMGradientButton from "../features/common/components/KMGradientButton";
import { Calendar } from "react-date-range";
import moment from "moment";


const data1 = [{Vibration: 0.13, date: "24 Jun 15:20" },
{Vibration: 0.13, date: "24 Jun 15:21" },
{Vibration: 0.13, date: "24 Jun 15:22" },
{Vibration: 0.13, date: "24 Jun 15:23" },
{Vibration: 0.13, date: "24 Jun 15:24" },
{Vibration: 0.14, date: "24 Jun 15:25" },
{Vibration: 0.13, date: "24 Jun 15:26" },
{Vibration: 0.14, date: "24 Jun 15:27" },
{Vibration: 0.13, date: "24 Jun 15:28" },
{Vibration: 0.13, date: "24 Jun 15:29" },
{Vibration: 0.14, date: "24 Jun 15:30" },
{Vibration: 0.13, date: "24 Jun 15:31" },
{Vibration: 0.13, date: "24 Jun 15:32" },
{Vibration: 0.14, date: "24 Jun 15:33" },
{Vibration: 0.13, date: "24 Jun 15:34" },
{Vibration: 0.13, date: "24 Jun 15:35" },
{Vibration: 0.13, date: "24 Jun 15:36" },
{Vibration: 0.13, date: "24 Jun 15:37" },
{Vibration: 0.13, date: "24 Jun 15:38" },
{Vibration: 0.13, date: "24 Jun 15:39" },
{Vibration: 0.13, date: "24 Jun 15:40" },
{Vibration: 0.13, date: "24 Jun 15:41" },
{Vibration: 0.13, date: "24 Jun 15:42" },
{Vibration: 0.13, date: "24 Jun 15:43" },
{Vibration: 0.13, date: "24 Jun 15:44" },
{Vibration: 0.13, date: "24 Jun 15:45" },
{Vibration: 0.13, date: "24 Jun 15:46" },
{Vibration: 0.13, date: "24 Jun 15:47" },
{Vibration: 0.13, date: "24 Jun 15:48" },
{Vibration: 0.13, date: "24 Jun 15:49" },
{Vibration: 0.13, date: "24 Jun 15:50" },
{Vibration: 0.13, date: "24 Jun 15:51" },
{Vibration: 0.14, date: "24 Jun 15:52" },
{Vibration: 0.14, date: "24 Jun 15:53" },
{Vibration: 0.14, date: "24 Jun 15:54" },
{Vibration: 0.14, date: "24 Jun 15:55" },
{Vibration: 0.13, date: "24 Jun 15:56" },
{Vibration: 0.14, date: "24 Jun 15:57" },
{Vibration: 0.13, date: "24 Jun 15:58" },
{Vibration: 0.14, date: "24 Jun 15:59" },
{Vibration: 0.13, date: "24 Jun 16:00" },
{Vibration: 0.14, date: "24 Jun 16:01" },
{Vibration: 0.13, date: "24 Jun 16:02" },
{Vibration: 0.14, date: "24 Jun 16:03" },
{Vibration: 0.13, date: "24 Jun 16:04" },
{Vibration: 0.13, date: "24 Jun 16:05" },
{Vibration: 0.13, date: "24 Jun 16:06" },
{Vibration: 0.13, date: "24 Jun 16:07" },
{Vibration: 0.13, date: "24 Jun 16:08" },
{Vibration: 0.13, date: "24 Jun 16:09" },
{Vibration: 0.13, date: "24 Jun 16:10" },
{Vibration: 0.13, date: "24 Jun 16:11" },
{Vibration: 0.13, date: "24 Jun 16:12" },
{Vibration: 0.13, date: "24 Jun 16:13" },
{Vibration: 0.13, date: "24 Jun 16:14" },
{Vibration: 0.13, date: "24 Jun 16:15" },
{Vibration: 0.13, date: "24 Jun 16:16" },
{Vibration: 0.13, date: "24 Jun 16:17" },
{Vibration: 0.13, date: "24 Jun 16:18" },
{Vibration: 0.13, date: "24 Jun 16:19" },
{Vibration: 0.13, date: "24 Jun 16:20" },
{Vibration: 0.13, date: "24 Jun 16:21" },
{Vibration: 0.13, date: "24 Jun 16:22" },
{Vibration: 0.13, date: "24 Jun 16:23" },
{Vibration: 0.13, date: "24 Jun 16:24" },
{Vibration: 0.13, date: "24 Jun 16:25" },
{Vibration: 0.13, date: "24 Jun 16:26" },
{Vibration: 0.14, date: "24 Jun 16:27" },
{Vibration: 0.13, date: "24 Jun 16:28" },
{Vibration: 0.14, date: "24 Jun 16:29" },
{Vibration: 0.13,  date: "24 Jun 16:30" },
{Vibration: 0.14, date: "24 Jun 16:31" },
{Vibration: 0.138, date: "24 Jun 16:32" },
{Vibration: 0.14, date: "24 Jun 16:33" },
{Vibration: 0, date: "24 Jun 16:34" },
{Vibration: 0.13,  date: "24 Jun 16:35" },
{Vibration: 0, date: "24 Jun 16:36" },
{Vibration: 0.138, date: "24 Jun 16:37" },
{Vibration: 0.132, date: "24 Jun 16:38" },
{Vibration: 0, date: "24 Jun 16:39" },
{Vibration: 0.13,  date: "24 Jun 16:40" },
{Vibration: 0.134, date: "24 Jun 16:41" },
{Vibration: 0.138, date: "24 Jun 16:42" },
{Vibration: 0.132, date: "24 Jun 16:43" },
{Vibration: 0.136, date: "24 Jun 16:44" },
{Vibration: 0.13, date: "24 Jun 16:45" },
{Vibration: 0.134, date: "24 Jun 16:46" },
{Vibration: 0.138, date: "24 Jun 16:47" },
{Vibration: 0.132, date: "24 Jun 16:48" },
{Vibration: 0.136, date: "24 Jun 16:49" },
{Vibration: 0.13, date: "24 Jun 16:50" },
{Vibration: 0.134, date: "24 Jun 16:51" },
{Vibration: 0.138, date: "24 Jun 16:52" },
{Vibration: 0.132, date: "24 Jun 16:53" },
{Vibration: 0.136, date: "24 Jun 16:54" },
{Vibration: 0.13, date: "24 Jun 16:55" },
{Vibration: 0.134, date: "24 Jun 16:56" },
{Vibration: 0.138, date: "24 Jun 16:57" },
{Vibration: 0.132, date: "24 Jun 16:58" },
{Vibration: 0.136, date: "24 Jun 16:59" }]
class VibrationInfoScreen extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef()
        this.state = {
            chillerList: [],
            pumpList: [],
            selectedChiller: null,
            menuToggle: false,
            btnNumber: 2,
            activePumpId: null,
            chillerStatusData: [],
            width: window.innerWidth,
            activeDeviceHorizontal: "CHWP-1",
            activeDeviceVertical: "CHWP-1",
            calendarShow: false,
            date : moment().subtract(1, "days")

        }
    }
    _handleDeviceSelect = (d,type) => {
            if (type==="horizontal")
            this.setState({activeDeviceHorizontal:d})
            else  if (type==="vertical")
            this.setState({activeDeviceVertical:d})
    }
     downloadReport=()=>{
        this.setState({ calendarShow : true })
    }
    render(){
        console.log(this.state.activeDeviceHorizontal)
        const { theme } = this.props
        let data=[
            { id : 1, equipment : "CHWP-1" , horizontal : 10 , vertical : 15 },
            { id : 2, equipment : "CHWP-2" , horizontal : 22 , vertical : 18 },
            { id : 3, equipment : "CWP-1" , horizontal : 7 , vertical : 9 },
            { id : 4, equipment : "CWP-2" , horizontal : 19 , vertical : 19 },
        ]

        return(
            <div className='container-fluid'>
                <div className='d-flex justify-content-between'> 
                <div className="pt-2 pl-2" style={{ fontSize: myFonts.heading2, fontWeight: 'bold', color: chillerColors[theme].bodyText }}>
							<span>CPF Tampines Building</span>
							</div>
                    
                    <div className='dropleft'>
                        <div className=' d-flex p-2 align-items-center ' data-toggle="dropdown" style={{ border : `1px solid ${chillerColors[theme].blue}`,borderRadius:10, cursor:'pointer' }} onClick={this.downloadReport}>
                            <i className="fa fa-file-download align-self-center" style={{ color : chillerColors[theme].blue }} ></i>
                            <span className='px-2' style={{ color : chillerColors[theme].bodyText, fontSize: myFonts.labels }} >Daily Report</span>
                            
                        </div>
                        <div
                                className={`dropdown-menu px-4 dropdown-menu-left `}
                                style={{
                                borderRadius: 10,
                                overflow: "hidden",
                                boxShadow: `1px 1px 4px 2px ${chillerColors[theme].graph}`,
                                }}
                            >
                                <Calendar
                                date={this.state.date.toDate()}
                                // onChange={(date) => setDate(moment(date))}
                                showDateDisplay={false}
                                showSelectionPreview={false}
                                showMonthAndYearPickers={false}
                                maxDate={ moment().subtract(6, "months").subtract(1, "days").toDate()}
                                style={{ width: "23em" }}
                                // classNames={{ monthAndYearWrapper: 'calendarBackground-dark' }}
                                />
                                
                                <a
                                className="px-4 py-2"
                            
                                href={''}
                                target="_blank"
                                style={{ textDecoration: "none" }}
                                >
                                <KMGradientButton
                                    text="Download Report"
                                    // text="Show Report"
                                    small={true}
                                    round
                                    // disable={buttonDisable}
                                    onClick={()=>this.setState({ calendarShow : false })}
                                    selectTheme={"light"}
                                />
                                </a>
                            </div>
                    </div>  
                    
                </div>
                <div className='col-lg-7 col-xl-7 col-12 my-3  py-3' style={{ backgroundImage: chillerColors[theme].tableColor, borderRadius :5}}>
                    <div className='d-flex justify-content-between  px-2 py-2'  style={{ color:chillerColors[theme].bodyText,  fontSize : myFonts.graphLabels }}>
                        <div className='p-2 w-100 col-lg-4 col-xl-4 col-4 '>
                         Equipment
                         </div>
                         <div className='d-flex justify-content-between col-lg-7 col-xl-7 col-7 px-0'>
                             <div className='mx-2 py-2 px-2 px-lg-xl-3 w-100'>
                             Horizontal
                             </div>
                             <div className='py-2 px-3 px-2  px-lg-xl-3 w-100'>
                             Vertical
                             </div>
                         </div>
                            
                            </div>
                    {
                        data && data.map((v,k)=>(
                            <div className='d-flex justify-content-between  px-2 py-2' key={v.id} style={{ color:chillerColors[theme].bodyText, fontSize : myFonts.graphLabels}}>
                                <div className='p-2 w-100 col-lg-4 col-xl-4 col-4 ' style={{  borderRadius:5, background : chillerColors[theme].background3 }}>
                                    {v.equipment}
                                </div>
                                <div className='d-flex justify-content-between col-lg-7 col-xl-7 col-7 px-0'>
                                    <div className='mx-2 py-2 px-2 px-lg-xl-3 w-100' style={{  borderRadius:5, background : chillerColors[theme].background3 }}>
                                        {v.horizontal} Hz
                                    </div>
                                    <div className='py-2 px-3 px-2  px-lg-xl-3 w-100' style={{  borderRadius:5, background : chillerColors[theme].background3 }}>
                                        {v.vertical} Hz
                                    </div>
                                </div>
                            
                            </div>
                        ))
                    }
                </div>

                <div className="pt-2" style={{color: chillerColors[theme].bodyText}}>
                <div className="pt-2 pl-2" style={{ fontSize: myFonts.heading2, fontWeight: 'bold', color: chillerColors[theme].bodyText }}>
							<span >Vibration Monitoring(Horizontal)</span>
							</div>
                    <BottomPanel
                            
                            handleDateRange={this._handleDateRange}
                            resetDate={this.resetDate}
                            // title={'Vibration Monitoring(Horizontal)'}
                            // width={width}
                            theme={theme}
                            type="horizontal"
                            yLabel="Hz"
                            // data={this.state.powerDevices}
                            graphData={this.state.graphData}
                            _handleDeviceSelect={this._handleDeviceSelect}
                            activeDevice={this.state.activeDeviceHorizontal}
                            // isLoading={this.state.loading.isEnergyMonitor}
                            keys={["Power", "Temperature"]}
                            deviceLists={[{
                                id:"1",
                                deviceName:"CHWP-1"
                            },
                            {
                                id:"2",
                                deviceName:"CHWP-2"
                            },
                            {
                                id:"3",
                                deviceName:"CWP-1"
                            },
                            {
                                id:"4",
                                deviceName:"CWP-2"
                            }
                        ]}
                            tmpGraphData={data1}
                            // startDate={startDate}
                            // endDate={endDate}
                            lineColor={chillerColors[theme].blue}
                        />
                        <div className="pt-2 pl-2" style={{ fontSize: myFonts.heading2, fontWeight: 'bold', color: chillerColors[theme].bodyText }}>
							<span >Vibration Monitoring(Vertical)</span>
							</div>
                    <BottomPanel
                            handleDateRange={this._handleDateRange}
                            resetDate={this.resetDate}
                            // title={'Vibration Monitoring(Vertical)'}
                            // width={width}
                            theme={theme}
                            type="vertical"
                            yLabel="Hz"
                            deviceLists={[{
                                id:"1",
                                deviceName:"CHWP-1"
                            },
                            {
                                id:"2",
                                deviceName:"CHWP-2"
                            },
                            {
                                id:"3",
                                deviceName:"CWP-1"
                            },
                            {
                                id:"4",
                                deviceName:"CWP-2"
                            }
                        ]}
                            graphData={this.state.graphData}
                            _handleDeviceSelect={this._handleDeviceSelect}
                            activeDevice={this.state.activeDeviceVertical}
                            // isLoading={this.state.loading.isEnergyMonitor}
                            keys={["Power", "Temperature"]}
                            tmpGraphData={data1}
                            // startDate={startDate}
                            // endDate={endDate}
                            lineColor={chillerColors[theme].blue}
                        /></div>
            </div>

        )
    }

}
export default withTheme(withRouter(VibrationInfoScreen))
