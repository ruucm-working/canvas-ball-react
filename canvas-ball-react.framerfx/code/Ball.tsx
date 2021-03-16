import { addPropertyControls, ControlType } from "framer"
import * as React from "react"
import { useEffect, useRef } from "react"
import { CanvasBall } from "./canvas-ball"

export function Ball({ play }) {
  console.log("CanvasBall", CanvasBall)

  const ball = new CanvasBall(30, 0.5)

  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current

    if (canvas) {
      const context = canvas.getContext("2d")

      canvas.width = 300
      canvas.height = 200

      let animationFrameId

      // Our draw came here
      function render() {
        context.clearRect(0, 0, context.canvas.width, context.canvas.height)
        ball.draw(context)
        animationFrameId = window.requestAnimationFrame(render)
      }
      if (play) render()

      return () => {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [canvasRef, play])

  return (
    <canvas
      ref={canvasRef}
      style={{
        // width: 300,
        // height: 200,
        background: "pink",
      }}
    />
  )
}

Ball.defaultProps = {
  play: true,
}

addPropertyControls(Ball, {
  play: {
    type: ControlType.Boolean,
  },
})
