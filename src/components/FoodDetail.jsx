import React from 'react';
import foods from '../data/fodmap_repo.json';
import "./FoodDetail.scss";
import Button from 'react-bootstrap/Button';
import Info from '../components/Info';

function Food(props) {

    let food = foods.find((food) => food.id === props.match.params.id);
    let foodDetails = JSON.stringify(food.details).replace(/['"{}]/g, '').replace(/:/g, ': ').split(',').map((item, i) => <span key={i}>{item}<br /></span>);
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className="food">
            <div className="name">{food.name}</div>
            <div className="fodmap">Fodmap: {food.fodmap}</div>
            <div className="details">
                {foodDetails}
            </div>
            <>
            <Button className="info" onClick={() => setModalShow(true)}>i</Button>
            <Info
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            </>
        </div>
    );
}

export default Food;
