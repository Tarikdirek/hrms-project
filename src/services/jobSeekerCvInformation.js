import axios from "axios";

export default class JobSeekerInformationService{

    getJobSeekerCvInfo(){
        return axios.get("http://localhost:8080/api/jobseekers/getcvinfo");
    }
}