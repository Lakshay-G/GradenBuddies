import React from 'react';
import timelineData from "../../Data";
import TimelineItems from "../../components/timeline/TimelineItems";
import "../../components/timeline/Timeline.css";

const Index = () => timelineData.length > 0 &&(
    <div className="timeline-1">

    <div className="timeline-container">
        {timelineData.map((data, idx) => (
            <TimelineItems data={data} key={idx} />
        ))}
    </div>
    </div>
);

export default Index;