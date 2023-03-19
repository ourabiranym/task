export const addTask = (payload) => {
  return {
    type: "ADD-TASK",
    payload: payload,
  };
};
