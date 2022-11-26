import axios from 'axios'


// http://localhost:5000/api

const BASEURL="http://localhost:5000/api"




    export const addtodo= async (data)=>{

      const result = await axios.post(
        `${BASEURL}/todo/addtodo`,data
      );
    
      if(result.data.success){
        return true
        }
        else{
          return false
        }
  }

  export const gettodo= async (id)=>{

    const result = await axios.get(
      `${BASEURL}/todo/${id}`
    );
  
  if(result.data){
  return result.data
  }
  else{
    return []
  }
}


export const getfiltertodo= async (id,filtertodo)=>{
  const result = await axios.get(
    `${BASEURL}/todo/filter/${id}/${filtertodo}`
  );

if(result.data){
return result.data
}
else{
  return []
}
}

export const edittodo= async (id, data)=>{

  const result = await axios.put(
    `${BASEURL}/todo/update/${id}`, data
  );

if(result.data.success){
return true
}
else{
  return false
}
}
export const edittodoComplete= async (id, data)=>{

  const result = await axios.put(
    `${BASEURL}/todo/updateiscomplete/${id}`, data
  );

if(result.data.success){
return true
}
else{
  return false
}
}


export const deletetodo= async (id)=>{

  const result = await axios.delete(
    `${BASEURL}/todo/delete/${id}`,
  );

if(result.data.success){
return true
}
else{
  return false
}
}

export const signup=async (data)=>{

  const result = await axios.post(
    `${BASEURL}/users/signup`,data
  );

  if(result.data.success){
    return true
    }
    else{
      return false
    }
}

export const login= async (data)=>{

  const { data: res } = await axios.post(
    `${BASEURL}/users/signin`,data
  );
  if(res.token){
    localStorage.setItem("token", res.token);
    localStorage.setItem("user", JSON.stringify(res.user));
    return true
    }
    else{
      return false
    }
}