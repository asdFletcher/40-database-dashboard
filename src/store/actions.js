export const destroy = (payload) => {
  return {
    type: "DELETE",
    payload: payload,
  };
};

export const update = (payload) => {
  return {
    type: "UPDATE",
    payload: payload,
  };
};

export const create = (payload) => {
  return {
    type: "CREATE",
    payload: payload,
  };
};
