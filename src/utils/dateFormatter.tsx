
export const dateFormatter = (date:number) => new Date(date).toLocaleDateString('en-US', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
})
