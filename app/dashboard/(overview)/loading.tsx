import DashboardSkeleton from "../../ui/skeletons";


//Used as a fallback when original component being built by next js on server 
export default function Loading(){

    return <DashboardSkeleton/>;
}