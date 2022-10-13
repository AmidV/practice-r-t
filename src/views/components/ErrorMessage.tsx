interface MessageProps {
    error: string
}

export default function ErrorMessage({ error }: MessageProps) {
  return (
    <p style={{ textAlign: 'center', color: 'red'}}>{ error }</p>
  )
}
