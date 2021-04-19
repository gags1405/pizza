import React from "react";
import Classes from "../../styles/Menu/PizzaList.module.css";
import { connect } from "react-redux";
import * as ActionTypes from "../../store/actions/actions";
import { storeItem } from "../../store/actions/actions";
import { format } from "../../constants/constants";

const PizzaList = (props) => {
  const {
    Pizza,
    Image,
    Information,
    Name,
    Price,
    Description,
    Button,

    Active,
    Sizes,
  } = Classes;
  const { data, conversionRate, alterSize } = props;

  return (
    <>
      {Object.values(data).map((element, index) => {
        return (
          <div className="col-md-5 offset-md-1" key={index}>
            <div className={Pizza}>
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
                  <div className={Sizes}>
                    <br />
                    Size : &nbsp;
                    {element.sizes.map((Size, Index) => {
                      return (
                        <>
                          <span
                            className={
                              element.sizeIndex === Index ? Active : null
                            }
                            key={index}
                            onClick={() => {
                              alterSize(index, Index);
                            }}
                          >
                            {Size.size}
                          </span>
                        </>
                      );
                    })}
                  </div>
                  <div className={`${Price} text-muted`}>
                    <b style={{ float: "right", color: "#222" }}>
                      <br />
                      &nbsp;&nbsp;&nbsp;
                      {props.currency === "dollars"
                        ? "$" + element.sizes[element.sizeIndex].price
                        : "€" +
                          format(
                            element.sizes[element.sizeIndex].price *
                              conversionRate
                          )}
                    </b>
                  </div>
                </div>

                <div className={`${Description} text-muted`}>
                  {element.description}
                  <div className={Sizes}></div>
                </div>
              </div>
            </div>
            <button
              className={Button}
              onClick={() => {
                props.storeItem(
                  element.id,
                  element.sizes[element.sizeIndex].size
                );
              }}
            >
              Add To Cart
            </button>
          </div>
        );
      })}
    </>
  );
};
const dispatchToProps = (dispatch) => {
  return {
    ShowAlert: () => {
      dispatch({ type: ActionTypes.SHOW_ALERT });
    },
    storeItem: (id, size) => {
      dispatch(storeItem(id, size));
    },
  };
};

const stateToProps = (state) => {
  return {
    currency: state.currency,
  };
};

export default connect(stateToProps, dispatchToProps)(PizzaList);
