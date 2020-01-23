import React from 'react';
import PersonTable from './components/index.jsx';
import data from './data/profiles';

let mass = data;


class App extends React.Component {

    constructor(props) {
        super(props)
        /* mass = this.akiba(data);*/

        this.state = {
            mass: mass,

            direction: {
                Name: "asc",
                Email: "asc",
                Phone: "asc",
                Company: "asc",
            }
        }
        this.sortBy = this.sortBy.bind(this)
    }

    /*	akiba(data){
        if (localStorage.length!=0){
        return this.mass = localStorage.getItem('mass');
    }
    else {
        return data;
    }
    }*/

    sortBy(key) {
        if (this.state.direction[key] === "asc") {
            this.setState({
                mass: mass.sort(function (a, b) {
                    if (a[key] < b[key]) {
                        return (-1)
                    } else if (a[key] > b[key]) {
                        return (1)
                    } else {
                        return (0)
                    }
                }),
                direction: {
                    Name: "asc",
                    Email: "asc",
                    Phone: "asc",
                    Company: "asc",
                    [key]: "desc",
                }

            })
        } else if (this.state.direction[key] === "desc") {
            this.setState({
                mass: mass.sort(function (a, b) {
                    if (a[key] < b[key]) {
                        return (1)
                    } else if (a[key] > b[key]) {
                        return (-1)
                    } else {
                        return (0)
                    }
                }),
                direction: {
                    Name: "asc",
                    Email: "asc",
                    Phone: "asc",
                    Company: "asc",
                }
            })
        }
    }


    render() {
        return (
            <div
                className="page-container"
            >
                <PersonTable
                    /*	onload={() => {}}*/

                    mass={this.state.mass}
                    sortBy={this.sortBy}
                />
            </div>
        )
    }
}

export default App

