import {Button} from '../components/Button';

type Genres = {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

interface SidebarProps{
  genres: Genres[];
  handleClick: (id:number)=>void;
  selectedGenreId: number;
}

export function SideBar({genres, handleClick, selectedGenreId}: SidebarProps) {

  return (
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClick(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>

      </nav>
  )
}