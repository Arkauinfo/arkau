type RuleProps = {
    className?: string;
}

export default function Rule({ className = "" }: RuleProps) {
    return (
        <div className={`h-px bg-neutral-300 ${className}`} />
    )
}