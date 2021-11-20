 function users() {


    // span header
    let usersSpan=document.getElementById("User")
    let pagesNumberSpan=document.getElementById("Pages")
    let currentPageSpan=document.getElementById("current-pages")
    console.log(currentPageSpan);
    
    let request= new XMLHttpRequest();
    let url="https://reqres.in/api/users?page=2";
    request.onreadystatechange= function () {
        let tbody=document.querySelector(" .table tbody")
        let content="";        
        if(this.readyState == 4 && this.status == 200 ){

            let data=JSON.parse(this.responseText);

            let currentPage=data.page;
            let numbPages=data.total_pages;
            let totalUser=data.total;
            let usersData=data.data;
            
            for(let i=0 ; i<usersData.length ; i++){

                let id=usersData[i].id;
                let name= usersData[i].first_name + usersData[i].last_name;
                let email=usersData[i].email;
                let image=usersData[i].avatar;
                
                content+=`

                <tr>
                   <td>${id}</td>
                   <td>${name}</td>
                   <td>${email}</td>
                   <td>  <img src="${image}" alt=""></td>
               </tr>
                
                `
            } 
    
            tbody.innerHTML=content;
            
            usersSpan.innerHTML = totalUser;
            currentPageSpan.innerHTML = currentPage;
            pagesNumberSpan.innerHTML = numbPages;
            

            
        } 
       
       
    }

    request.open("GET",url,true)
    request.send()
    
}

users();