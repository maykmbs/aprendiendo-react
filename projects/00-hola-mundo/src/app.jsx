import "./app.css"
import { TwitterFollowCard } from "./twitterFollowCard.jsx"

export const App = () => (
    <article className="followCard">
    <TwitterFollowCard userName="Miguel Burga" userTag="mayk.burga" />
    <TwitterFollowCard userName="Miguel Burga Solar" userTag="burga.solar" />
    <TwitterFollowCard userName="Mayk Burga" userTag="burga.mayk" />
    </article>
)

