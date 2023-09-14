import axios from "axios";

export default class EmployerNameService{

    getEmployerName(){
        return axios.get("http://localhost:8080/api/employers/getall");
    }
}