import ApiService from "./ApiService"

export const ProjectService  = {
    getAll(){
        return ApiService.getFetch(`/projects`, {});
    }
};