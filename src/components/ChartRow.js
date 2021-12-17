import React from 'react';


function ChartRow({name, description, material, category}){
    return (
                <tr>
                    <td>{name}</td>
                    <td>{description}</td>
                    <td>{material.name.charAt(0).toLocaleUpperCase() + material.name.slice(1)}</td>

                    <td>{category.name.charAt(0).toLocaleUpperCase() + category.name.slice(1)}</td>
                </tr>
            )
    }
    
        

export default ChartRow;