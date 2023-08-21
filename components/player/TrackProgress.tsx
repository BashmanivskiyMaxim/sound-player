import React from "react";
import style from "./TrackProgress.module.css"

interface TrackProgressProps {
  left: number;
  right: number;
  onChange: (e: any) => void;
}
const TrackProgress: React.FC<TrackProgressProps> = ({
  left,
  right,
  onChange,
}) => {
  return (
    <div className={style.track_progress}>
      <input className={style.bar} type="range" min={left} max={right} value={left} onChange={onChange}/>
      <div className={style.container}>
        {left} / {right}
      </div>
    </div>
  );
};

export default TrackProgress;
