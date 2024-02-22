import './new-component-7777.css';
export interface NewComponent7777Props {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NewComponent7777 = ({
    children = 'NewComponent7777',
}: NewComponent7777Props) => {
    return (
        <div className="text-center title">
            <ul className="unordered">
                <li className="list">{children}Item1222</li>
                <li className="li-1 li-2 li-4 li-5 li-3">Item44444</li>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </div>
    );
};
