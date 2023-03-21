import type React from 'react'

export interface Videos {
  id: string
  title: string
  channel: string
  image: string
  description: string
  views: string
  likes: number
  duration: string
  video: string
  timestamp: string
  comments: []
}

export interface Props {
  children: React.ReactNode
  image?: string
  link?: string
}
