"use client"

import { useEffect, useRef, useState } from "react"

const GRID_WIDTH = 50
const GRID_HEIGHT = 20
const CELL_SIZE = 12
const INITIAL_SNAKE = [
  { x: 5, y: 10 },
  { x: 4, y: 10 },
  { x: 3, y: 10 },
]
const INITIAL_FOOD = { x: 15, y: 10 }
const INITIAL_DIRECTION = { x: 1, y: 0 }
const GAME_SPEED = 140

export function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [snake, setSnake] = useState(INITIAL_SNAKE)
  const [food, setFood] = useState(INITIAL_FOOD)
  const [direction, setDirection] = useState(INITIAL_DIRECTION)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction.y === 0) setDirection({ x: 0, y: -1 })
          break
        case "ArrowDown":
          if (direction.y === 0) setDirection({ x: 0, y: 1 })
          break
        case "ArrowLeft":
          if (direction.x === 0) setDirection({ x: -1, y: 0 })
          break
        case "ArrowRight":
          if (direction.x === 0) setDirection({ x: 1, y: 0 })
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [direction])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const gameLoop = setInterval(() => {
      if (gameOver) return

      const newSnake = [...snake]
      const head = {
        x: (newSnake[0].x + direction.x + GRID_WIDTH) % GRID_WIDTH,
        y: (newSnake[0].y + direction.y + GRID_HEIGHT) % GRID_HEIGHT,
      }

      if (newSnake.some((segment, index) => index !== 0 && segment.x === head.x && segment.y === head.y)) {
        setGameOver(true)
        return
      }

      newSnake.unshift(head)

      if (head.x === food.x && head.y === food.y) {
        setScore((prev) => prev + 1)
        let newFood
        do {
          newFood = {
            x: Math.floor(Math.random() * GRID_WIDTH),
            y: Math.floor(Math.random() * GRID_HEIGHT),
          }
        } while (newSnake.some((segment) => segment.x === newFood.x && segment.y === newFood.y))
        setFood(newFood)
      } else {
        newSnake.pop()
      }

      setSnake(newSnake)

      // Draw background
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw subtle grid pattern
      ctx.strokeStyle = '#333333'
      ctx.lineWidth = 0.8
      for (let x = 0; x <= GRID_WIDTH; x++) {
        ctx.beginPath()
        ctx.moveTo(x * CELL_SIZE, 0)
        ctx.lineTo(x * CELL_SIZE, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y <= GRID_HEIGHT; y++) {
        ctx.beginPath()
        ctx.moveTo(0, y * CELL_SIZE)
        ctx.lineTo(canvas.width, y * CELL_SIZE)
        ctx.stroke()
      }

      // Draw snake with enhanced aesthetics
      newSnake.forEach((segment, index) => {
        // Draw segment body with rounded corners
        ctx.fillStyle = index === 0 ? '#22c55e' : '#4ade80'
        const radius = CELL_SIZE / 2.5
        
        ctx.beginPath()
        ctx.moveTo(segment.x * CELL_SIZE + radius, segment.y * CELL_SIZE)
        ctx.lineTo(segment.x * CELL_SIZE + CELL_SIZE - radius, segment.y * CELL_SIZE)
        ctx.quadraticCurveTo(segment.x * CELL_SIZE + CELL_SIZE, segment.y * CELL_SIZE, segment.x * CELL_SIZE + CELL_SIZE, segment.y * CELL_SIZE + radius)
        ctx.lineTo(segment.x * CELL_SIZE + CELL_SIZE, segment.y * CELL_SIZE + CELL_SIZE - radius)
        ctx.quadraticCurveTo(segment.x * CELL_SIZE + CELL_SIZE, segment.y * CELL_SIZE + CELL_SIZE, segment.x * CELL_SIZE + CELL_SIZE - radius, segment.y * CELL_SIZE + CELL_SIZE)
        ctx.lineTo(segment.x * CELL_SIZE + radius, segment.y * CELL_SIZE + CELL_SIZE)
        ctx.quadraticCurveTo(segment.x * CELL_SIZE, segment.y * CELL_SIZE + CELL_SIZE, segment.x * CELL_SIZE, segment.y * CELL_SIZE + CELL_SIZE - radius)
        ctx.lineTo(segment.x * CELL_SIZE, segment.y * CELL_SIZE + radius)
        ctx.quadraticCurveTo(segment.x * CELL_SIZE, segment.y * CELL_SIZE, segment.x * CELL_SIZE + radius, segment.y * CELL_SIZE)
        ctx.fill()

        // Add subtle gradient overlay
        const gradient = ctx.createLinearGradient(
          segment.x * CELL_SIZE,
          segment.y * CELL_SIZE,
          segment.x * CELL_SIZE + CELL_SIZE,
          segment.y * CELL_SIZE + CELL_SIZE
        )
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.1)')
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0.1)')
        ctx.fillStyle = gradient
        ctx.fill()

        // Draw eyes on the head
        if (index === 0) {
          const eyeRadius = CELL_SIZE / 6
          const eyeOffset = CELL_SIZE / 4
          
          // Determine eye positions based on direction
          let leftEyeX, leftEyeY, rightEyeX, rightEyeY
          
          if (direction.x === 1) { // Moving right
            leftEyeX = segment.x * CELL_SIZE + CELL_SIZE - eyeOffset
            leftEyeY = segment.y * CELL_SIZE + eyeOffset
            rightEyeX = segment.x * CELL_SIZE + CELL_SIZE - eyeOffset
            rightEyeY = segment.y * CELL_SIZE + CELL_SIZE - eyeOffset
          } else if (direction.x === -1) { // Moving left
            leftEyeX = segment.x * CELL_SIZE + eyeOffset
            leftEyeY = segment.y * CELL_SIZE + eyeOffset
            rightEyeX = segment.x * CELL_SIZE + eyeOffset
            rightEyeY = segment.y * CELL_SIZE + CELL_SIZE - eyeOffset
          } else if (direction.y === -1) { // Moving up
            leftEyeX = segment.x * CELL_SIZE + eyeOffset
            leftEyeY = segment.y * CELL_SIZE + eyeOffset
            rightEyeX = segment.x * CELL_SIZE + CELL_SIZE - eyeOffset
            rightEyeY = segment.y * CELL_SIZE + eyeOffset
          } else { // Moving down
            leftEyeX = segment.x * CELL_SIZE + eyeOffset
            leftEyeY = segment.y * CELL_SIZE + CELL_SIZE - eyeOffset
            rightEyeX = segment.x * CELL_SIZE + CELL_SIZE - eyeOffset
            rightEyeY = segment.y * CELL_SIZE + CELL_SIZE - eyeOffset
          }

          // Draw eyes
          ctx.fillStyle = 'white'
          ctx.beginPath()
          ctx.arc(leftEyeX, leftEyeY, eyeRadius, 0, Math.PI * 2)
          ctx.arc(rightEyeX, rightEyeY, eyeRadius, 0, Math.PI * 2)
          ctx.fill()

          // Draw pupils
          ctx.fillStyle = 'black'
          ctx.beginPath()
          ctx.arc(leftEyeX, leftEyeY, eyeRadius/2, 0, Math.PI * 2)
          ctx.arc(rightEyeX, rightEyeY, eyeRadius/2, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // Draw food with pulsing effect
      const pulsingRadius = (CELL_SIZE/2) * (0.8 + Math.sin(Date.now() / 200) * 0.2)
      ctx.fillStyle = '#ef4444'
      ctx.beginPath()
      ctx.arc(
        food.x * CELL_SIZE + CELL_SIZE/2,
        food.y * CELL_SIZE + CELL_SIZE/2,
        pulsingRadius,
        0,
        Math.PI * 2
      )
      ctx.fill()

      // Add shine to food
      const foodGradient = ctx.createRadialGradient(
        food.x * CELL_SIZE + CELL_SIZE/3,
        food.y * CELL_SIZE + CELL_SIZE/3,
        0,
        food.x * CELL_SIZE + CELL_SIZE/2,
        food.y * CELL_SIZE + CELL_SIZE/2,
        CELL_SIZE/2
      )
      foodGradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)')
      foodGradient.addColorStop(1, 'rgba(239, 68, 68, 0)')
      ctx.fillStyle = foodGradient
      ctx.beginPath()
      ctx.arc(
        food.x * CELL_SIZE + CELL_SIZE/3,
        food.y * CELL_SIZE + CELL_SIZE/3,
        CELL_SIZE/4,
        0,
        Math.PI * 2
      )
      ctx.fill()

    }, GAME_SPEED)

    return () => clearInterval(gameLoop)
  }, [snake, food, direction, gameOver])

  const handleRestart = () => {
    setSnake(INITIAL_SNAKE)
    setFood(INITIAL_FOOD)
    setDirection(INITIAL_DIRECTION)
    setGameOver(false)
    setScore(0)
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center pt-10">
      <canvas
        ref={canvasRef}
        width={GRID_WIDTH * CELL_SIZE}
        height={GRID_HEIGHT * CELL_SIZE}
        className="border-2 border-zinc-700 rounded-lg shadow-lg shadow-emerald-200/10"
      />
      <div className="absolute top-4 right-4 text-white font-bold text-lg">Score: {score}</div>
      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-center">
            <p className="text-2xl font-bold text-white mb-4">Game Over!</p>
            <button
              onClick={handleRestart}
              className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors duration-200"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  )
}