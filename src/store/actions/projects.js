export const CREATE_PROJECT = 'CREATE_PROJECT';

export const createProject = (pname,description,tag) => {
    return async (dispatch) => {

        // const resData = await response.json();

        // console.log(pname, description,tag);

        dispatch({
            type: CREATE_PROJECT,
            projectData: {
                pname,
                description,
                tag
            }
        });
    }
};
