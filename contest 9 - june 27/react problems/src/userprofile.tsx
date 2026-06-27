
interface profile{
    name: string;
    age: string;
    isOnline: boolean;
    avatarUrl: string
}

export function UserProfile({name, age, isOnline, avatarUrl}: profile){
    return <>
    <div>
        <div style={{display: "flex"}}>
                <div style={{
                    width: "5px",
                    height: "5px",
                    backgroundColor: (isOnline ? "green" : "red"),
                    borderRadius: "50%"

                }}></div>
                <div>
                    {name}
                </div>

        </div>
        <div>
            {age}
        </div>
        <div>
            {isOnline ? "Available" : "Away"}
        </div>
        <div>
            {avatarUrl.length ? avatarUrl : name[0]}
        </div>
    </div>

    </>
}

export default UserProfile