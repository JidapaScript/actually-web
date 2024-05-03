export default function TopBar(){
    return (
        <top className="flex justify-between fixed bottom-0 w-full bg-black text-white p-8">
            <a href="/profile" className="profile-sm"> 
            <img className="profile-img-sm" src="profile_sm.png" alt="profile" /> 
            </a>
            <a href="/feed" className="actually-mainpage"> 
            <img className="actually-logo" src="actually.svg" alt="actually" /> 
            </a>
            <a href="#" className="search-bar"> 
            <img className="search" src="search.svg" alt="search" /> 
            </a>
        </top>
    );
}