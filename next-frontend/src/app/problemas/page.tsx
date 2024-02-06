import ProblemCard from "../ui/problemas/ProblemCard";
import Button from "../ui/problemas/Button";

export default function ProblemsPage() {
    return (
        <div className="w-full p-8 flex flex-col items-center space-y-4">
            <Button>Nuevo</Button>
            <ProblemCard  />
            <ProblemCard  />
            <ProblemCard  />
            <ProblemCard  />
            <ProblemCard  />
            <ProblemCard  />    
        </div>
    );
}