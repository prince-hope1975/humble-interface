import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}%`;
}

interface DiscreteSliderProps {
  onChange: (value: number | number[]) => void;
}

const DiscreteSlider: React.FC<DiscreteSliderProps> = ({ onChange }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        onChange={(e, v, at) => onChange(v)}
        aria-label="%"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        shiftStep={30}
        step={10}
        marks
        min={10}
        max={100}
      />
    </Box>
  );
};

export default DiscreteSlider;
