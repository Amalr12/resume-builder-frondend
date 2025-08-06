//1.add resume details to the server --post --reqBody

import { commonApi} from "./commonAPI"
import { serverURL } from "./serverURL"

export const addResumeAPI = async (reqBody)=>{
    return await commonApi("post",`${serverURL}/resumes`,reqBody)
}

//get all resumes
export const getAllResumeAPI = async ()=>{
    return await commonApi("GET",`${serverURL}/resumes`,"")
}

//delete a particular resumes
export const deleteResumeAPI = async (id)=>{
    return await commonApi("DELETE",`${serverURL}/resumes/${id}`,"")
}

//get a resume 

export const getAResumeAPI = async (id)=>{
    return await commonApi("GET",`${serverURL}/resumes/${id}`,"")
}

//UPDATE RESUME API

export const updateAResumeAPI = async (id,reqBody)=>{
    return await commonApi("PUT",`${serverURL}/resumes/${id}`,"")
}
