export const reducer = (state, action) => {
  switch (action.type) {
    case "changeVisible": {
      const { visible } = action;
      return {
        ...state,
        visible
      };
    }
    case "changeColor": {
      const { color } = action;
      return {
        ...state,
        color
      };
    }

    case "changeHeight": {
      const { height } = action;
      return {
        ...state,
        height
      };
    }

    case "changeWidth": {
      const { width } = action;
      return {
        ...state,
        width
      };
    }

    default:
      throw new Error();
  }
};

export const getInitialState = () => {
  return {
    visible: true,
    color: "red",
    height: 333,
    width: 500
  };
};
