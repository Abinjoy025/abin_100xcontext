const express = require("express")
const app = express()
const z = require("zod")

constdb = {
  users: [],
  movies: [
    {
      id:1,
      title:"Inception",
      genre:"Sci-Fi",
      duration:148,
      shows: [
        {
          showId:101,
          time:"10:00 AM",
          pricePerSeat:200,
          availableSeats:50
        },
        {
          showId:102,
          time:"2:00 PM",
          pricePerSeat:250,
          availableSeats:50
        },
        {
          showId:103,
          time:"6:00 PM",
          pricePerSeat:300,
          availableSeats:50
        }
      ]
    },
    {
      id:2,
      title:"The Dark Knight",
      genre:"Action",
      duration:152,
      shows: [
        {
          showId:201,
          time:"11:00 AM",
          pricePerSeat:200,
          availableSeats:50
        },
        {
          showId:202,
          time:"3:00 PM",
          pricePerSeat:250,
          availableSeats:50
        },
        {
          showId:203,
          time:"7:00 PM",
          pricePerSeat:300,
          availableSeats:50
        }
      ]
    },
    {
      id:3,
      title:"Interstellar",
      genre:"Sci-Fi",
      duration:169,
      shows: [
        {
          showId:301,
          time:"12:00 PM",
          pricePerSeat:250,
          availableSeats:50
        },
        {
          showId:302,
          time:"5:00 PM",
          pricePerSeat:300,
          availableSeats:50
        }
      ]
    }
  ]
}

app.use(express.json())

const validsignup=z.object({
    username: z.string(),
    password: z.string(),
    email: z.email()
});

const validsignin=z.object({
    username: z.string(),
    password: z.string()
})

const validbooking=z.object({
    movieId: z.number(),
    showId: z.number(),
    seats: z.number()
})

let id =1
let bookingId=1001

app.post("/signup",(req,res)=>{
    const result = validsignup.safeParse(req.body)
    if (!result){
        res.json({
            "success":false,
            "message":"User not created"
        })
        return
    }
    const emailcheck = constdb.users.find(x=>x.email===result.data.email)
    if(emailcheck){
        res.json({
            "success":false,
            "message":"Email already exists"
        })
        return
    }

    let user = {}
    user["id"]=id
    user["username"]=result.data.username
    user["password"]=result.data.password
    user["email"]=result.data.email
    user["bookings"]=[]
    constdb.users.push(user)
    res.status(201).json({
        "success":true,
        "message":"User created successfully",
        "userId":id
    })
    id=id+1
})


app.post("/signin",(req,res)=>{
    const result=validsignin.safeParse(req.body)
    if(!result){
        res.json({
            "success":false,
            "message":"Id's are not valid"
        })
        return
    }
    const user = constdb.users.find(x => x.username===result.data.username && x.password===result.data.password)
    if(!user){
        res.status(404).json({
            "success":false,
            "message":"User is not created"
        })
        return
    }
    const token = Math.random().toString()
    user["token"]=token
    res.status(200).json({
        "success":true,
        "message":"Signin successful",
        "token":token
    })

})


app.get("/movies",(req,res)=>{
    let movies=[]
    const movie =constdb.movies.map(x => movies.push(x.title))
    res.json({
        "movies": movies
    })
})

app.get("/movies/:movieId",(req,res)=>{
    const ids=req.params.movieId
    const movie =constdb.movies.find(x => x.id===Number(ids))
    if (!movie){
        res.status(404).json({
            "success":false,
            "message":"Movie not found"
        })
        return
    }
    res.json({
        "movies": movie.title
    })
})

app.get("/movies/:movieId/shows",(req,res)=>{
    const ids=req.params.movieId
    const movie =constdb.movies.find(x => x.id===Number(ids))
    if (!movie){
        res.status(404).json({
            "success":false,
            "message":"Movie not found"
        })
        return
    }
    res.json({
        "movie": movie.title,
        "shows": movie.shows
    })
})


app.post("/bookings/:userId",(req,res)=>{
    const ids = req.params.userId
    const user = constdb.users.find(x=> x.id===Number(ids))
    if(!user){
        res.status(404).json({
            "success": false,
            "message": "User does not exists"
        })
        return
    }
    const result=validbooking.safeParse(req.body)
    if(!result){
        res.json({
            "success": false,
            "message": "Given id's are not valid"
        })
        return
    }
    const movie = constdb.movies.find(x => x.id===result.data.movieId)
    if(!movie){
        res.status(404).json({
            "success": false,
            "message": "Movie not found"
        })
        return
    }
    const show = movie.shows.find(x => x.showId === result.data.showId)
    if(!show){
        res.status(404).json({
            "success": false,
            "message": "Show not found"
        })
        return
    }
    if (show.availableSeats>=result.data.seats){
        show.availableSeats=show.availableSeats-result.data.seats
    }
    else{
        res.status(404).json({
            "success": false,
            "message": "Required number of seats are not available"
        })
        return
    }
    let bookings={}
    bookings["bookingId"]=bookingId
    bookings["movieId"]=movie.id
    bookings["showId"]=show.id
    bookings["seats"]=result.data.seats
    bookings["totalAmount"]=result.data.seats*show.pricePerSeat
    bookings["status"]="confirmed"
    bookings["bookingDate"]=new Date()

    user.bookings.push(bookings)

    res.status(201).json({
        "success":true,
        "message":"Booking successful",
        "bookingId":bookingId,
        "movieTitle":movie.title,
        "showTime":show.time,
        "seats":result.data.seats,
        "totalAmount":result.data.seats*show.pricePerSeat
    })
    bookingId=bookingId+1
    console.log(constdb)
})


app.listen(3000)