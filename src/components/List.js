import React from 'react';
import Deal from './Deal';

function List({deals}) {
    return (
        <div>
            {
                deals.map((deal)=>{
                    return <Deal key={deal.key} id={deal.key} deal={deal}></Deal>
                })
            }
        </div>
    )
}

export default List;
