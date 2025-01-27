// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FormInput(props: any) {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const{ 
        validation, 
        invalid = "false", 
        dirty = "false", 
        onTurnDirty, 
        ...inputProps 
    } = props

    function handleBluer() {
        onTurnDirty(props.name)
    }

    return (
        <input { ...inputProps } 
        data-invalid={invalid} 
        onBlur={handleBluer}
        data-dirty={dirty}
        />
    )
}