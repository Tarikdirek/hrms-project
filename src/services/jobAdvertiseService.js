import axios from "axios";

export default class JobAdvertiseService{

    getJobsAdvertisements(){
        return axios.get("http://localhost:8080/api/jobadvertisements/getall");
    }
}