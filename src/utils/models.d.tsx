import React from 'react'

export type Videos = {
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

export type Props = {
  children: React.ReactNode
}
