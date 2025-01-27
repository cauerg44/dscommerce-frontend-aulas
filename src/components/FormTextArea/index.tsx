// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FormTextArea(props: any) {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
        validation,
        invalid = "false",
        dirty = "false",
        onTurnDirty,
        ...textareaProps
    } = props

    function handleBluer() {
        onTurnDirty(props.name)
    }

    return (
        <textarea {...textareaProps}
            data-invalid={invalid}
            onBlur={handleBluer}
            data-dirty={dirty}
        />
    )
}