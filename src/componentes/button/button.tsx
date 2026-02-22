type Props = {
    label: string;
};

function Button({ label }: Props) {
    return (
      <button style={{ padding: "10px 16px", cursor: "pointer" }}>
        {label}
      </button>
    );
}

export { Button }