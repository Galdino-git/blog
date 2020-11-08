import createDataContext from "./createDataContext";

const BlogReducer = (state, action) => {
  switch (action.type) {
    case "create":
      return [...state, { title: `Blog Post #${state.length + 1}` }];
    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "create" });
  };
};

export const { Context, Provider } = createDataContext(
  BlogReducer,
  { addBlogPost },
  []
);
