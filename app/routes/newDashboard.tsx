
import { CloseOutlined } from "@ant-design/icons";
import { Button, Checkbox, Radio, Select } from "antd";
import type { ReactElement } from "react";
import { COLORS } from "~/enum/color";
import "./newdashboard.css";
function Header(){
    return (
        <div className="heading">
            <header className="title">Redux Fundamentals Example</header>
        </div>
    )
}

type Arr ={
  label: ReactElement;
  value:string;
}

function Options({colors, value, lastElement}:{colors: Arr[], value:string, lastElement: boolean}) {
  console.log(lastElement)
  return (
      <div className={`content ${lastElement ? "no-border": ""}`}>
        <div className="leftSide">
          <Radio className="padding">{value}</Radio>
        </div>
        <div className="rightSide">
          <span className="options">
            <Select value={"Select One"} options={colors}/>
          </span>
          <div className="options">
            <Button>
              <CloseOutlined />
            </Button>
          </div>
        </div>
      </div>
  );
}
function renderOptions(opt: keyof typeof COLORS){
  let color = COLORS[opt];
  return (
    <>
    <span style={{color: color}}>{opt}
      </span></>
  )
}
function Body(){
    let options = ["Learn React", "Learn Redux", "Build Something fun!"];
    const colors = [{
        label: renderOptions("GREEN"), value: "Green"
    }, {
        label: renderOptions("BLUE"), value: "Blue",
    }, {
        label: renderOptions("ORANGE"), value: "Orange"
    }, {
        label: renderOptions("PURPLE"), value: "Purple"
    }, {
        label: renderOptions("RED"), value: "Red"
    }]
    return (
      <div className="body-title">
        <div className="body-heading">
          <span> TODO </span>
        </div>

        <div className="body-options">
          <div className="title">
            <p>What needs to be done?</p>
          </div>
          {options.map((element, index) => (
            <Options
              colors={colors}
              value={element}
              key={element}
              lastElement={index == options.length - 1}
            />
          ))}
          <div className="footer">
            <div className="items">
             <div className="footer-title">
              <span>Actions</span>
             </div >
             <div className="button-content">
              <Button type="primary" className="button-content">Mark All Completed</Button>
             </div>
             <div className="button-content">
              <Button type="primary" className="button-content">Clear Completed</Button>
             </div>
             </div>
            <div className="items">
            <div className="footer-title">
              <span>Remaining Todos</span>
             </div>
             <div>
             <span> 1 item left </span>
             </div>
            </div>
            
            <div className="items">
            <div className="footer-title">
              <p>Filter by Status</p>
             </div>
             <div className="radio">
              <div>
              <Radio value="All"/> All
              </div>
              <div><Radio value="Active"/> Active
              </div>
              <div> <Radio value="Active"/> Complete</div>
             </div>
            </div>
            <div className="items">
            <div className="footer-title">
              <p>Filter by Color</p>
             </div>
             <div>
              <Checkbox/>               <span
                style={{
                  display: "inline-block",
                  width: 12,
                  height: 12,
                  backgroundColor: "purple",
                  marginRight: 8,
                  borderRadius: 2,
                }}
              ></span>
Purple
             </div>
             <div>
              <Checkbox/>               <span
                style={{
                  display: "inline-block",
                  width: 12,
                  height: 12,
                  backgroundColor: "green",
                  marginRight: 8,
                  borderRadius: 2,
                }}
              ></span>
Green
             </div>
             <div>
              <Checkbox/>               <span
                style={{
                  display: "inline-block",
                  width: 12,
                  height: 12,
                  backgroundColor: "blue",
                  marginRight: 8,
                  borderRadius: 2,
                }}
              ></span>
Blue
             </div>
             <div>
              <Checkbox/>               <span
                style={{
                  display: "inline-block",
                  width: 12,
                  height: 12,
                  backgroundColor: "Red",
                  marginRight: 8,
                  borderRadius: 2,
                }}
              ></span>
Red
             </div>
            </div>
          </div>
        </div>
      </div>
    );
}

function Footer(){
  return (<>
  <div className="flex flex-row justify-center items-center">
    <div className="">
    <svg
    fill="#000000"
    width="100px"
    height="100px"
    viewBox="0 0 24 24"
    id="star"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
  >
    <polygon
      id="primary"
      points="12 4 9.22 9.27 3 10.11 7.5 14.21 6.44 20 12 17.27 17.56 20 16.5 14.21 21 10.11 14.78 9.27 12 4"
      style={{
        fill: "none",
        stroke: "#FF0000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
      </div>
  </div>
  </>)
}
export default function Dashboard() {
  return (
    <>
    <div className="dashboard">
    <Header/>
    <Body/>
    <Footer/>
    </div>
    </>
  );
}
