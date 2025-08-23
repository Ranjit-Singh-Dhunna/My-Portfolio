import React from "react";

export function SplineViewer(props) {
  return (
    <div 
      style={{
        width: props.width || "100%",
        height: props.height || "300px",
        position: props.position || "relative",
        ...props.style
      }}
    >
      <spline-viewer 
        
        style={{
          width: "100%",
          height: "100%"
        }}
      />
    </div>
  );
}


// rgb(98, 122, 163) light blue
// rgb(234, 153, 165) peach pink
// rgb(242, 198, 167) light orange
// rgb(160, 109, 157) fika pink
// rgb(253, 195, 133) yellow
// rgb(50, 51, 109) dark blue