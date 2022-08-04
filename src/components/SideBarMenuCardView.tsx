import {SideBarMenuCard} from "../types/types"
import {classNames} from "../util/classes";
import "./SideBarMenuCardView.scss";

interface SideBarMenuCardViewProps{
    card: SideBarMenuCard;
    isOpen: boolean;
}

export default function SideBarMenuCardView({
    card,
    isOpen,
}: SideBarMenuCardViewProps){
    return( <div className="SideBarMenuCardView">
        <img 
        className="profile" 
        alt={card.displayName} 
        src={card.photoUrl} 
        width="100%"/>
        <div className={classNames("profileInfo", isOpen? "": "collapsed")}>
            <div className="name">{card.displayName}</div>
            <div className="title">{card.title}</div>
            <div className="url">
                <a href={card.url}>Ir ao Perfil</a>
            </div>
        </div>
    </div>
    );
}