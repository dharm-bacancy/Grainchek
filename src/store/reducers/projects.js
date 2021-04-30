import Project from "../../model/project";
import { CREATE_PROJECT, DELETE_PROJECT, LOAD_PROJECTS } from "../actions/projects";

const initialState ={
    pageNo : 1,
    availableProject: [],
    userProject: [],
    completedProjects : [],
    projects : [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PROJECT:
            const newProject = new Project(
                action.projectData.pname,
                action.projectData.description, 
                action.projectData.tag
            );
            return {
                ...state,
                availableProject: state.availableProject.concat(newProject),
                userProject: state.userProject.concat(newProject)
            };
        case DELETE_PROJECT:
            return{
                ...state,
                userProject:state.userProject.filter(
                    project => project.pname !== action.pName
                ),
                availableProject:state.availableProject.filter(
                    project => project.pname !== action.pName
                )
            };
        case LOAD_PROJECTS:
            return {
                ...state,
                pageNo : state.pageNo + 1,
                projects : [...state.projects , ...action.projects] ,
                completedProjects : state.completedProjects,
            };
    }
    
    return state;
};