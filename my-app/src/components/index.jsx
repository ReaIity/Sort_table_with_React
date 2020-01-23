import React from 'react'
import data from '../data/profiles';
var mass = data;

const headers = Object.keys(mass[0]);
export default function PersonTable(props) {
    return (
        <table>
            <tr>
                {headers.map((name) => {
                    return (
                        <th onClick={() =>
							{
								console.log(mass);
								props.sortBy(name);
								localStorage["mass"] = JSON.stringify(mass);
							}
                        }>
                            {name}
                        </th>
                    )
                })}
            </tr>

            {mass.map((l, k) => {
                return (
                    <tr className="row">
                        {headers.map((name) => {
                            return (
                                <td className={name.toLowerCase()}>{mass[k][name]}</td>
                            )
                        })}
                    </tr>)
            })}
        </table>
    )
}
