import createDataContext from "./createDataContext";

const BlogReducer = (state, action) => {
  switch (action.type) {
    case "create":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: `Blog Post #${state.length + 1}`,
        },
      ];
    case "delete":
      return state.filter((blogPost) => blogPost.id !== action.payload);

    default:
      return state;
  }
};

const addBlogPost = (dispatch) => {
  return () => {
    dispatch({ type: "create" });
  };
};

const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  BlogReducer,
  { addBlogPost, deleteBlogPost },
  []
);
