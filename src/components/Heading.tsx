function Heading({headline, className}:{headline:string, className?:string}) {
  return (
    <div className="main-container">
        <h1 className={className}>{headline}</h1>
    </div>
  )
}

export default Heading