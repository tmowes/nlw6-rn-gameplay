import React, { useState } from 'react'

import { Slide, Slider } from './components'
import { slides } from './data'

export const LiquidSwipe = () => {
  const [index, setIndex] = useState(1)
  const prev = slides[index - 1]
  const next = slides[index + 1]
  return (
    <Slider
      key={index}
      index={index}
      setIndex={setIndex}
      prev={prev && <Slide slide={prev} />}
      next={next && <Slide slide={next} />}
    >
      <Slide slide={slides[index]!} />
    </Slider>
  )
}
