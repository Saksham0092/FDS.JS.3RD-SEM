// Promise.resolve().then(()=>{
//     console.log("promise resolved");
// })

function getuser(id, callback){
    settimeout(()=>{
        console.log("user fetched");
        constuser = {
            id: 101,
            username: "zishan"
        }
        callback(null, user)
    },1000)
}
function getprofile(id, callback){
    setTimeout(()=>{
        console.log("profile fetched")
        const profile = {
            usernme: "zishan",
            location: "new delhi"
        }
        callback(null, profile)
    })
}
function getposts(id, callback){
    setTimeout(()=>{
        console.log("posts fetched")
        const posts = [
            {
                title: "post 1",
                content: "this is post 1"
            },
            {
                title: "post 2",
                content: "this is post 2"
            }
        ]
        callback(null, posts)
    }, 1000)
}
getuser(101, (err, user) => {
    if (err) {
        console.log(err);
    } else {
        console.log(user);

        getprofile(user.id, (err, profile) => {
            if (err) {
                console.log(err);
            } else {
                console.log(profile);

                getposts(user.id, (err, posts) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(posts);
                    }
                });
            }
        });
    }
});