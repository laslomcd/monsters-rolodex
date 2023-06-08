import { Component } from "react";
import './CardList.css'
import CardItem from "../card-item/CardItem";

class CardList extends Component {
    render() {
        const { monsters } = this.props;
        return (
            <div className="card-list">{monsters.map(monster => {
                return (
                    <CardItem monster={monster} key={monster.id} />
                )
            })}
            </div>
        )
    }
}

export default CardList;