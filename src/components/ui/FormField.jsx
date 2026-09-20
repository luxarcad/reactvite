function FormField({
    label,
    name,
    type = 'text',
    value,
    onChange,
    placeholder = '',
    required = false,
    error = '',
    autoComplete
}) {
    return (
        <div className="form-group">
            <label htmlFor={name}>
                {label}
            </label>

            <input 
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                autoComplete={autoComplete}
                className={error ? 'input-error' : ''} />

            {error && (
                <span className="form-error">
                    {error}
                </span>
            )}
        </div>
    );
}

export default FormField;