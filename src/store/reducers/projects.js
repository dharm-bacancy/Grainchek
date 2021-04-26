import Project from "../../model/project";
import { CREATE_PROJECT } from "../actions/projects";

const initialState ={
    availableProject: null,
    userProject: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PROJECT:
            const newProject = new Project(
                new Date().toString(), 
                action.projectData.pname,
                action.projectData.description, 
                action.projectData.tag
            );
            return {
                ...state
            };
    }
    
    return state;
};