import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./style.css"
import { Box, Typography } from "@mui/material"
import PublicSharpIcon from '@mui/icons-material/PublicSharp';

const animation = { duration: 50000, easing: (t) => t }

const TextSlider = () => {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 5,
    },
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  });

  const sx={ fontSize: 14, fontWeight: 400, letterSpacing: 1.5 }

  return (
    <Box ref={sliderRef} className="keen-slider">
      <Box className="keen-slider__slide number-slide1" sx={sx}>
        <PublicSharpIcon fontSize="small" sx={{ marginRight: '5px' }}/> 
        <Typography>
          DELOITTE AHM 2022
        </Typography>
      </Box>
      <Box className="keen-slider__slide number-slide2" sx={sx}>
        <PublicSharpIcon fontSize="small" sx={{ marginRight: '5px' }}/> 
        <Typography>
          DELOITTE AHM 2022
        </Typography>
      </Box>
      <Box className="keen-slider__slide number-slide3" sx={sx}>
        <PublicSharpIcon fontSize="small" sx={{ marginRight: '5px' }}/> 
        <Typography>
          DELOITTE AHM 2022
        </Typography>
      </Box>
      <Box className="keen-slider__slide number-slide4" sx={sx}>
        <PublicSharpIcon fontSize="small" sx={{ marginRight: '5px' }}/> 
        <Typography>
          DELOITTE AHM 2022
        </Typography>
      </Box>
      <Box className="keen-slider__slide number-slide5" sx={sx}>
        <PublicSharpIcon fontSize="small" sx={{ marginRight: '5px' }}/> 
        <Typography>
          DELOITTE AHM 2022
        </Typography>
      </Box>
      <Box className="keen-slider__slide number-slide6" sx={sx}>
        <PublicSharpIcon fontSize="small" sx={{ marginRight: '5px' }}/> 
        <Typography>
          DELOITTE AHM 2022
        </Typography>
      </Box>
    </Box>
  );
};

export default TextSlider;