function getdata(dataID,nextgetdata){
    setTimeout(()=>{
        console.log("data",dataID);
        if(nextgetdata){
            nextgetdata();
        }
    },4000);
}
//to use callback with () and arg then use arrow function other syntax: function(callback); --->no ()
getdata(115,()=>{
    getdata(114,()=>{
        getdata(115,()=>{
            getdata(114) // this has no nextgetdata so we applied if(exists){ exists};
        })
    });
})