import Label from './Label';

type TitleSectionProps = {
  label: string
  number: string
  firstLine: string
  secondLine: string
}

export default function TitleSection({
  label,
  number,
  firstLine,
  secondLine
}: TitleSectionProps) {
  return (
    <div className="reveal section-hidden">
      <Label n={number}>{label}</Label>
      <h2
        className="my-10!"
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 'clamp(32px, 3.5vw, 52px)',
          lineHeight: '1.08',
          letterSpacing: '-0.035em',
        }}
      >
        {firstLine}
        <br />
        <span className="italic text-[rgba(240,237,230,0.32)]">
          {secondLine}
        </span>
      </h2>
    </div>
  )
}
