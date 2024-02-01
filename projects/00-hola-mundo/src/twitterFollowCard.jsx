export const TwitterFollowCard = ({userName, userTag}) => (
    <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                className="tw-followCard-avatar"
                src="public\foto-perfil.jpg"
                alt="Foto de Perfil" />
                <div className="tw-followCard-info">
                    <strong className="tw-followCard-info-userName">{userName}</strong>
                    <span className="tw-followCard-info-userTag">@{userTag}</span>
                </div>
            </header>
            <aside>
                <button className="tw-followCard-followButton">Seguir</button>
            </aside>
        </article>
)