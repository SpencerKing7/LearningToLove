interface HeaderProps {
  title: string
  backgroundImage?: string
  isMainHeader?: boolean
}

function Header({ title, backgroundImage, isMainHeader = false }: HeaderProps) {
  if (isMainHeader) {
    return (
      <header className="masthead">
        <div className="bottom-header">
          <p>{title}</p>
        </div>
      </header>
    )
  }

  return (
    <header
      className="py-5 bg-image-full"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-center my-5">
        <h1 className="other-header">{title}</h1>
      </div>
    </header>
  )
}

export default Header
