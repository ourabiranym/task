import { v4 as uuidv4 } from "uuid";
import { ADD_TASK, EDIT_TASK } from "../constance/action type";
const initialState = {
  taskesListe: [
    {
      id: uuidv4(),
      description: "I want to visit Dubai",
      isDone: true,
    },
    {
      id: uuidv4(),
      description: "I want to eat pizza",
      isDone: false,
    },

    {
      id: uuidv4(),
      description: "I want to finish my studies",
      isDone: false,
    },

    {
      id: uuidv4(),
      description: "I want to travel",
      isDone: false,
    },

    {
      id: uuidv4(),
      description: "I want to go out",
      isDone: false,
    },
  ],
};

function taskReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TASK:
      return {
        taskesListe: [
          ...state.taskesListe,
          { id: uuidv4(), description: payload, isDone: false },
        ],
      };
    case EDIT_TASK:
      return {
        taskesListe: state.taskesListe.map((task) => {
          if (task.id === payload.id) {
            return { ...task, description: payload.edited };
          } else {
            return task;
          }
        }),
      };
    default:
      return state;
  }
}

export default taskReducer;
