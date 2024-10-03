export default function PostItem(props) {
    return(<>
    <div>
        <h3>
            {props.titles}
        </h3>
        <p>{props.content}</p>
    </div>
    </>)
}