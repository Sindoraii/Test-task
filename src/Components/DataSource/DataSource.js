export async function DataSource() {
    let users = null;
     await fetch("https://jsonplaceholder.typicode.com/users")
          .then((res)=> {
             if(res.ok) {
                return res.json();
             } else {
                return new Error("Request is failed");
             }
          })
          .then((data)=> users = data)
   return users;
}
