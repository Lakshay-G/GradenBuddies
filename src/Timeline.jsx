import React from 'react';
import timelineData from "./Data"; 
import TimelineItems from "./Timelineitems";
import "./Timeline.css";

const Timeline = () => timelineData.length > 0 &&(
    <div className="timeline-1">

    <div className="timeline-container">
        {timelineData.map((data, idx) => (
            <TimelineItems data={data} key={idx} />
        ))}
    </div>
    </div>
);

export default Timeline;