import { Checkbox } from "@/components/ui/checkbox"

type Props = {
    id?: string,
    label?: string,
    type?: string
}

export default function CheckboxWithLabel( {id, label, type="radio"}: Props ) {
        
    return (
        <div className="flex items-center justify-center">
            <Checkbox id={id} type="submit"></Checkbox>
            <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-500">{label}</label>
        </div>
    );
}