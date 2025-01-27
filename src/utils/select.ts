export const selectStyles = {
    control: (provided: any) => ({
        ...provided,
        minHeight: "40px",
        border: "1px solid var(--dsc-color-card-border)",
        boxShadow: "none",
        "&:hover": {
            border: "1px solid var(--dsc-color-card-border)",
        },
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: "var(--dsc-color-font-placeholder)",
    }),
    option: (provided: any) => ({
        ...provided,
        color: "var(--dsc-color-font-primary)",
    }),
    indicatorSeparator: (provided: any) => ({
        ...provided,
        display: "none",
    }),
};

// border: "1px solid var(--dsc-color-card-border)",