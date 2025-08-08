export default function CheckboxGroup({ id = "", children }) {
    return <div role="group"
        aria-labelledby={"label_" + id}
        data-component="checkbox"
    >
        {children}
    </div>
}