import {SideBarMenuCard} from "../types/types"
import {classNames} from "../util/classes";
import "./SideBarMenuCardView.scss";

interface SideBarMenuCardViewProps{
    card: SideBarMenuCard;
    isOpen: boolean;
}

export default function Products(){
    return( <div className="SideBarMenuCardView">
        <img 
        className="profile"        
        width="100%"/>
        <div>
            <div className="name">teste</div>
            <div className="title"></div>
            <div className="url">
                <a href="/blablaurl">minha url click aqui</a>
            </div>
        </div>
    </div>
    );
}