import "./styles.css";

interface Props {
    count: number;
}
const RegularList = ({ count }: Props) => {
    const data = new Array(count).fill(0);
    return (
        <ul className="regular">
            {data.map((_, idx) => (
                <li className="list-item" style={{ top: `${(idx+1)*2}rem`, backgroundColor: idx%2==0?'lightgray':'' }} key={idx}>List item number: {idx + 1}</li>
            ))}
        </ul>
    );
};

export { RegularList };
