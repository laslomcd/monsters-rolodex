import { Component } from "react";

class CardItem extends Component {
    render() {
        const { id, name, email } = this.props.monster
        return (
            <div className="card-container" key={id}>
                <img alt={`monster ${name}`} src={`http://robohash.org/${id}?set=set2&size=180x180`} />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default CardItem