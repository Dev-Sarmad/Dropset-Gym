interface ParagraphProps {
    paragraph: string;
}
function Paragraph({ paragraph }: ParagraphProps) {
  return (
    <div className="main-container p-3 mt-20 text-left text-2xl md:pr-28 ">{paragraph}</div>
  )
}

export default Paragraph
