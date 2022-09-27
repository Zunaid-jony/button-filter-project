import React, { useEffect, useState } from 'react';
import CardView from './CardView';
import './card.css'
import Men from '../componet/Men.json'

const Card = () => {
    // const Men = 'https://jsonplaceholder.typicode.com/posts'
    const [card, setCard] = useState(Men)
    const filterItem = ( cateItem) =>{
        const updatedItems = Men.filter((curElem) =>{
            return curElem.userId === cateItem
        })
        setCard(updatedItems)

    }
    useEffect(()=>{
        // URL(`https://jsonplaceholder.typicode.com/posts`)
        fetch(Men)
       .then(responce => responce.json())
       .then(data =>setCard(data))
    },[])
    return (
        <div className='container' >
            <br /><br />
            <button onClick={() => filterItem(1)}>biriani</button>
            <button onClick={() => filterItem(2)}>kacchi</button>
            <button onClick={() => filterItem(3)}>all data</button>
            <button onClick={() => setCard(Men)}>all data</button>
        
           
            
           <div className='row  justify-content-center card-class'>
         
           {
                card.map(product => <CardView
                key={product.id}
                product={product}
                >     
                </CardView>)
            }
           </div>
        </div>
    );
};

export default Card;