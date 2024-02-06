import { ReactNode } from 'react';

type TagProps = {
    status: ReactNode;
};

export default function TagStatusProblemCard({ status }: TagProps) {
    return (
        <span className="inline-block 
            bg-green-100 text-green-700 
            border border-green-600 
            px-2 py-1 
            text-xs font-semibold rounded-md ml-2">
            {status}
        </span>
    );
}
