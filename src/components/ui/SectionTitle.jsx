function SectionTitle({
    eyebrow,
    title,
    description,
    center = false
}) {
    return (
        <div className={`section-heading ${center ? 'section-heading-center' : ''}`}>
            {eyebrow && (
                <span className="eyebrow">
                    {eyebrow}
                </span>
            )}

            <h2>{title}</h2>

            {description && (
                <p>
                    {description}
                </p>
            )}
        </div>
    );
}

export default SectionTitle;