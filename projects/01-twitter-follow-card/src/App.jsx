import "./app.css"
import { TwitterFollowCard } from "./twitterFollowCard.jsx"

const users = [
    {
        name: "Miguel Burga",
        userTag: "maykburga",
        isFollowing: true
    },
    {
        name: "Knak",
        userTag: "kidknak",
        isFollowing: false
    },
    {
        name: "Gonza Conde",
        userTag: "bizarrap",
        isFollowing: true
    }
]

export const App = () => 
    <section className="followCard">
        {
            users.map(({name, userTag, isFollowing}) => (
                <TwitterFollowCard
                    key={userTag}
                    userName={name}
                    userTag={userTag}
                    initialIsFollowing={isFollowing}
                />
                )
                
            )
        }
    </section>


