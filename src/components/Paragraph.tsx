interface ParagraphProps {
  paragraph: string;
  className?: string;
}
function Paragraph({ paragraph, className }: ParagraphProps) {
  return <div className={className}>{paragraph}</div>;
}

export default Paragraph;
