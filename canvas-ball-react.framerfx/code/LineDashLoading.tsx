import { addPropertyControls } from "framer"
import * as React from "react"
import { useEffect, useRef } from "react"

export function LineDashLoading(props) {
  const { play, ...options } = props

  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current

    if (canvas) {
      const context = canvas.getContext("2d")
      let animationFrameId

      // Our draw came here
      // function render() {
      //   context.clearRect(0, 0, context.canvas.width, context.canvas.height)
      //   const item = new Particle(
      //     particleColors[getRandomInt(0, particleColors.length)],
      //     emojis[getRandomInt(0, emojis.length)],

      //     options,
      //     props.width,
      //     props.height
      //   )
      //   item.draw(context)
      //   animationFrameId = window.requestAnimationFrame(render)
      // }
      // if (play) render()

      // return () => {
      //   window.cancelAnimationFrame(animationFrameId)
      // }
    }
  }, [canvasRef, play])

  return <canvas ref={canvasRef} {...props} />
}

LineDashLoading.defaultProps = {
  width: 300,
  height: 600,
}

addPropertyControls(LineDashLoading, {})
