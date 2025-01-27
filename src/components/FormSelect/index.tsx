import Select from "react-select"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FormSelect(props: any) {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
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
        <Select 
        {...selectProps}
            data-invalid={invalid}
            onBlur={handleBluer}
            data-dirty={dirty}
        />
    )
}