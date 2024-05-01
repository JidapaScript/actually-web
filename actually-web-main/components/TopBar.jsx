export default function TopBar(){
    return (
        <top className="flex justify-between fixed bottom-0 w-full bg-black text-white p-8">
            <a href="#" className="profile"> 
            <img className="profile-pic" src="profile_sm.png" alt="profile" /> 
            </a>
            <a href="#" className="actually-mainpage"> 
            <img className="actually-logo" src="actually.svg" alt="actually" /> 
            </a>
            <a href="#" className="search-bar"> 
            <img className="search" src="search.svg" alt="search" /> 
            </a>
        </top>
    );
}