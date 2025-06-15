import { GamePlayerType } from "@models/game-player-type";

interface NameListProps {
    names: string[]; 
    player: GamePlayerType;
    onElementClick: (name: string, player: GamePlayerType) => void
}

export const NamesList: React.FC<NameListProps> = ({ names, player, onElementClick }) => {
    return <>
        {
            names.map((text) => <p tabIndex={0} navi-element="true" key={`${player}-${text}`} onClick={() => onElementClick(text, player)}>{text}</p>)
        }
    </>;
}
