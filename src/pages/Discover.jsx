import {Error,Loader,SongCard} from '../components';
import {genres} from '../assets/constants';

const Discover = () => {

    // initially hard code genre title

    const genreTitle='Pop';
    

                                         // flex --> class name and flex-col indicates use of columns for tailwind css      
    return (
        <div className="flex flex-col">  
            <div className='w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10'> 
                <h2 className='=font-bold text-3x1 text-white text-left'>Discover {genreTitle}</h2>
                <select
                    onChange={()=>{}}
                    value=""
                    className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5' // this means background-black, text gray of size 300, padding -3
                    // text -small and rounded edges , if small devices then margin top =0 else 5 
                    
                    // here inside this ,we will map over genres and return an HTML 5 component 'option'
                >
                {genres.map((genre)=><option key={genre.value} value={genre.value}>{genre.title}</option>)}
                </select> 
            </div>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
             {[1,2,3,4,5,6,7,8,9,10].map((song,i)=>( //  This component is for each song
                  // here 1 to 10 represent dummy song number . Here you have to return a dummy card component 
                <SongCard // lists all the songs one at a time
                    key={song.key} // song key taken from song for the card
                    song={song} // 
                    i={i}   // index of song 
                />
             ))}
            </div>
        </div>
    );
};

export default Discover;
