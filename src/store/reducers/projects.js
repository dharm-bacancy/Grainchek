import Project from "../../model/project";
import { CREATE_PROJECT } from "../actions/projects";

const initialState ={
    availableProject: [],
    userProject: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PROJECT:
            const newProject = new Project(
                action.projectData.pname,
                action.projectData.description, 
                action.projectData.tag
            );
            //console.log(action.projectData.pname, action.projectData.description,action.projectData.tag);
            return {
                //...state,
                availableProject: state.availableProject.concat(newProject),
                userProject: state.userProject.concat(newProject)
            };
    }
    
    return state;
};