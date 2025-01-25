import ButtonPrimary from "../ButtonPrimary";

type Props = {
    message: string,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    onDialogClose: Function
}

export default function DialogInfo({ message, onDialogClose }: Props) {

    return (
        <div className="dsc-dialog-background" onClick={() => onDialogClose()}>
            <div className="dsc-dialog-box" onClick={(e) => e.stopPropagation()}>
                <h2>{message}</h2>
                <div className="dsc-dialog-btn-container" onClick={() => onDialogClose()}>
                    <ButtonPrimary text="Ok" />
                </div>
            </div>
        </div>
    )
}