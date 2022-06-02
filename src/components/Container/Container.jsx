import "./container.css";

export const Container = (props) =>{
    return (
        <div className="page-container">
            {props.children}
        </div>
    )
}