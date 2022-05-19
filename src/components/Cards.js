import React, { Component } from "react";
import Lists from "./Lists";

let foods = [
  {
    name: "Palov",
    description: "Juda mazali o'zbek xalq taomi",
    price: 18000,
    imgUrl:
      "https://media.istockphoto.com/photos/uzbek-cuisine-pilaf-picture-id1273602664?b=1&k=20&m=1273602664&s=170667a&w=0&h=kk0ba0Ogu_hy4ihI8X2pd_loPVHzwn2wtS5hhrF4fcM=",
  },
  {
    name: "Sho'rva",
    description: "Yengil,mazali taom",
    price: 16000,
    imgUrl:
      "https://media.istockphoto.com/photos/chuchvara-traditional-uzbek-lamb-soup-with-dumplings-and-sour-cream-picture-id1305632808?b=1&k=20&m=1305632808&s=170667a&w=0&h=Nl6tuukTHQfQGxNdHutboWOVbbu5Mtq593qFg6OzByw=",
  },
  {
    name: "Chuchvara",
    description: "Juda mazali,shirin taom",
    price: 17000,
    imgUrl:
      "https://media.istockphoto.com/photos/dumplings-in-the-soup-chuchvara-uzbek-cuisine-picture-id1366651038?b=1&k=20&m=1366651038&s=170667a&w=0&h=wwPmEPSn2_xnphas1oTcFqmMM-4UxoxlcAFRB13Uafc=",
  },
  {
    name: "Somsa",
    description: "Yoqimli tamga ega lazzatli taom",
    price: 8000,
    imgUrl:
      "https://media.istockphoto.com/photos/puff-pastries-with-meat-traditional-uzbek-and-indian-pasrty-picture-id876663348?b=1&k=20&m=876663348&s=170667a&w=0&h=lxtLRN-5273p3yEM9JggbbWvX8WpTIePqVKYbhmeEMI=",
  },
  {
    name: "Shashlik",
    description: "Go'shtning lazzatli pishirilgani",
    price: 10000,
    imgUrl:
      "https://media.istockphoto.com/photos/traditional-turkish-grilled-meat-shish-kebab-picture-id1365122337?b=1&k=20&m=1365122337&s=170667a&w=0&h=5TZwLpaog8rWWXdUDdxgw3yOehnGtIvt2W-wFw6yzlQ=",
  },
  {
    name: "Norin",
    description: "Xamir va go'sht orqali tayyorlangan salat",
    price: 14000,
    imgUrl: "https://img.povar.ru/main/d1/82/b6/4b/norin-4758.jpg",
  },
  {
    name: "Mastava",
    description: "Yengil,yoqimli taom",
    price: 14000,
    imgUrl:
      "https://media.istockphoto.com/photos/mastava-uzbek-cuisine-soup-with-beef-and-rice-picture-id1362428473?b=1&k=20&m=1362428473&s=170667a&w=0&h=0XN2ZaBp2kyMiJqRiJIEz1gVintIDvb3HkygUeVyXxA=",
  },
  {
    name: "Moshxo'rda",
    description: "Shirin,moshli taom",
    price: 13000,
    imgUrl:
      "https://i.mycdn.me/i?r=AzEPZsRbOZEKgBhR0XGMT1RkpLYHnN3RA9uP1YuY56ecr6aKTM5SRkZCeTgDn6uOyic",
  },
  {
    name: "Lag'mon",
    description: "Xamirli yengil taom",
    price: 17000,
    imgUrl: "https://i.ytimg.com/vi/Aw21sklD_iQ/maxresdefault.jpg",
  },
];
let listArr = [];
let sum=0;
class Cards extends Component {
  state = {
    arrList: [],
  };
  getFood = (index) => {
    listArr.push(foods[index]);
    this.setState({
      arrList: listArr,
    });
   sum=0;
listArr.map((list) => {
  sum=sum+list.price;
  return sum;
})
  };
  render() {
    return (
      <div className="sending-container">
        <div className="card_container">
          {foods.map((food, index) => (
            <div key={index + 1} className="card">
              <h3>{food.name}</h3>
              <img src={food.imgUrl} alt="" />
              <p>{food.description}</p>
              <div className="hire">
                <p>{food.price} sum</p>
                <button onClick={() => this.getFood(index)}>
                  Buyurtma berish
                </button>
              </div>
            </div>
          ))}
        </div>
        <Lists arrList={this.state.arrList} price={sum} />
      </div>
    );
  }
}

export default Cards;
