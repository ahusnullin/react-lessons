import React, {Component} from "react";

/**
 * Классовый компонент
 */
export class User extends Component {

    constructor(props) {
        super(props);
        this.state = {
            num: 1,
        }
        this.changeAvatar = () => {
            this.setState({ num: this.state.num + 1})
        }
    }

    render() {
        let avatar_url = `https://picsum.photos/id/${this.state.num}/100`
        return <div>
            <img src={avatar_url} alt="" />
            <button type="button" onClick={this.changeAvatar}>
                Изменить аватар
            </button>
        </div>
    }
}
