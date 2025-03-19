interface SectionTitleProps {
    title: string
  }
  
  export default function SectionTitle({ title }: SectionTitleProps) {
    return <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
  }
  
  