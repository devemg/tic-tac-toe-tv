import { GamePlayerType } from "@models/game-player-type";
import styles from './names-list.module.scss';

interface NameListProps {
    names: string[]; 
    player: GamePlayerType;
    onElementClick: (name: string, player: GamePlayerType) => void
}

export const NamesList: React.FC<NameListProps> = ({ names, player, onElementClick }) => {
    return <div className={styles['name-options']}>
        {
            names.map((text) => <p key={`${player}-${text}`} onClick={() => onElementClick(text, player)}>{text}</p>)
        }
    </div>;
}
