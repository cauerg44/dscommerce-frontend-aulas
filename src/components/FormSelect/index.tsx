import Select from "react-select"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FormSelect(props: any) {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
        className,
        validation,
        invalid = "false",
        dirty = "false",
        onTurnDirty,
        ...selectProps
    } = props

    function handleBluer() {
        onTurnDirty(props.name)
    }

    return (
        <div
            className={className}
            data-invalid={invalid}
            data-dirty={dirty}
        >
            <Select
                {...selectProps}
                onBlur={handleBluer}
            />
        </div>
    )
}