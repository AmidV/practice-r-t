interface Message {
    error: string
}

export default function ErrorMessage({ error }: Message) {
  return (
    <p style={{ textAlign: 'center', color: 'red'}}>{ error }</p>
  )
}
