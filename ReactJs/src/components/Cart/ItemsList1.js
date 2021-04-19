import React, { Component } from "react";
import Classes from "../../styles/Cart/ItemsList.module.css";
export class ItemsList1 extends Component {
  render() {
    var { data, alterQuantity, deletePizza } = this.props;
    const {
      Pizza,
      Image,
      Information,
      Name,
      Description,
      Quantity,
      Current,
      Plus,
      Minus,
      Active,
      Sizes,
    } = Classes;

    return Object.values(data).map((element, Index) => {
      return (
        <div className={Pizza} key={Index}>
          <div className={Image}>
            <img
              src={element.image}
              alt={element.name}
              width="80"
              height="80"
            />
          </div>
          <div className={Information}>
            <div className={Name}>
              <b>{element.name}</b>
              <div className={`text-muted`} style={{ float: "right" }}>
                <div className={Sizes}>
                  <span className={Active}>{element.size}</span>
                </div>
              </div>
            </div>

            <div className={`${Description} text-muted`}>
              {element.description}
              <div className={Quantity}>
                <div
                  className={Minus}
                  onClick={() => {
                    alterQuantity(-1, Index);
                  }}
                >
                  -
                </div>
                <div className={Current}>{element.quantity}</div>
                <div
                  className={Plus}
                  onClick={() => {
                    alterQuantity(1, Index);
                  }}
                >
                  +
                </div>
                <span
                  className="Orange"
                  style={{ marginLeft: "20px" }}
                  onClick={() => {
                    deletePizza(Index, element.id);
                  }}
                >
                  <i className="far fa-trash-alt"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
}

export default ItemsList1;
