import { useMoralis } from "react-moralis"
export default function ManualHeader() {
    const { enableWeb3 } = useMoralis()
    return (
        <div>
            <h3>Header</h3>
        </div>
    )
}