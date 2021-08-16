export const styles = {
    control: () => ({
        height: '30px',
        width: '100%',
        padding: '0 5px',
        fontSize: '16px',
        color: '#4f4f4f',
        borderRadius: '15px',
        border: '0.5px solid lightgreen',
        outline: 'none',
        appearance: 'none',
        display: 'flex'
    }),
    option: (styles, state) => ({
        padding: "10px",
        cursor: "pointer",
        backgroundColor: state.isFocused ? 'lightgreen' : 'white'
    }),
} 