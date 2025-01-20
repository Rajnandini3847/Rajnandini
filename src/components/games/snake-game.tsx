"use client"

import { useEffect, useRef, useState } from "react"

const GRID_WIDTH = 40 // Wider grid
const GRID_HEIGHT = 20 // Lesser height
const CELL_SIZE = 12 // Smaller cells for smoother movement
const INITIAL_SNAKE = [
  { x: 5, y: 10 },
  { x: 4, y: 10 },
  { x: 3, y: 10 },
] // Start with 3 segments
const INITIAL_FOOD = { x: 15, y: 10 }
const INITIAL_DIRECTION = { x: 1, y: 0 }
const GAME_SPEED = 140 // Slightly faster

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

      // Move snake
      const newSnake = [...snake]
      const head = {
        x: (newSnake[0].x + direction.x + GRID_WIDTH) % GRID_WIDTH,
        y: (newSnake[0].y + direction.y + GRID_HEIGHT) % GRID_HEIGHT,
      }

      // Check collision with self
      if (newSnake.some((segment, index) => index !== 0 && segment.x === head.x && segment.y === head.y)) {
        setGameOver(true)
        return
      }

      newSnake.unshift(head)

      // Check if food is eaten
      if (head.x === food.x && head.y === food.y) {
        setScore((prev) => prev + 1)
        // Generate new food position
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

      // Draw
      ctx.fillStyle = "#000"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw snake and food (same as original logic)
      newSnake.forEach((segment, index) => {
        ctx.fillStyle = index === 0 ? "#22c55e" : "#4ade80"
        ctx.fillRect(segment.x * CELL_SIZE, segment.y * CELL_SIZE, CELL_SIZE, CELL_SIZE)
      })

      ctx.fillStyle = "#ef4444"
      ctx.beginPath()
      ctx.arc(food.x * CELL_SIZE + CELL_SIZE / 2, food.y * CELL_SIZE + CELL_SIZE / 2, CELL_SIZE / 2, 0, Math.PI * 2)
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
    <div className="relative w-full h-full flex items-center justify-center">
      <canvas
        ref={canvasRef}
        width={GRID_WIDTH * CELL_SIZE}
        height={GRID_HEIGHT * CELL_SIZE}
        className="border border-muted-foreground rounded-lg"
      />
      <div className="absolute top-4 right-4 text-white font-bold text-lg">Score: {score}</div>
      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-center">
            <p className="text-2xl font-bold text-white mb-4">Game Over!</p>
            <button
              onClick={handleRestart}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
