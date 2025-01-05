function Heading({headline, className}:{headline:string, className?:string}) {
  return (
    <div className="main-container p-4">
        <h1 className={className}>{headline}</h1>
    </div>
  )
}

export default Heading