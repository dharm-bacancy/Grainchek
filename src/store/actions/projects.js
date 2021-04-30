import {
    createProjectUrl,
    fetchProjectsUrl
} from '../../apis/index';

export const CREATE_PROJECT = 'CREATE_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const LOAD_PROJECTS = 'LOAD_PROJECTS';
export const INC_PAGE_NO = 'INC_PAGE_NO';

export const createProject = (pname,description,tag) => {
    return async (dispatch,getState) => {
        const token = getState().auth.token;
        const response = await fetch(createProjectUrl,{
            method: 'POST',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : token
            },
            body:JSON.stringify({
                title : pname,
                description,
                tags : []
            })
        });

        if(!response.ok){
            const errorResData = await response.json()
            console.log(errorResData)
            let message = errorResData.message
            throw new Error(message);
        }

        const resData = await response.json();

        console.log(resData);

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

export const deleteProject = projectName => {
    return async (dispatch) =>{
        dispatch({
            type: DELETE_PROJECT,
            pName: projectName
        });
    }
};

export const loadProjects = () => {
    return async (dispatch, getState) => {
        const token = getState().auth.token
        const pageNo = getState().projects.pageNo

        const response = await fetch(fetchProjectsUrl(pageNo),{
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : token
            }
        })
        if(!response.ok){
            const errorResData = await response.json()
            console.log(errorResData)
            let message = errorResData.message
            throw new Error(message);
        }
        const resData = await response.json();
        // console.log(resData)
        dispatch({ type : LOAD_PROJECTS , projects : resData.data.projects })
    }
};