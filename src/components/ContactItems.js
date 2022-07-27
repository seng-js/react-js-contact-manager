import GridViewItems from "./GridViewItems";
import ListViewItems from "./ListViewItems";

const ContactItems = (props) => {
    const isGridView = props.isGridView === undefined ? true : props.isGridView;
    return (
        <>
            {isGridView ? (
                <GridViewItems data={props.data} />
            ):(
                <ListViewItems data={props.data} />
            )}
        </>
    )
}

export default ContactItems