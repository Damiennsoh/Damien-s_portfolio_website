"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = ["All", "Web Development", "Cybersecurity", "IT Support", "Graphic Design", "Video Editing"]

export default function ProjectFilter() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}

