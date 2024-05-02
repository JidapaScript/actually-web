import TopBar from "../components/TopBar";

export default function MainLayout({children}){
    return <div>
        <h1>
            {children}
            <TopBar />
        </h1>
    </div>
}