import { ConnectButton } from "web3uikit"
export default function Header() {
    return (
        <div className="border-b-2 p-5 flex flex-row bg-gray-200">
            <h1 className="p-4 font-blog text-3xl">Decentralized Lottery</h1>
            <div className="ml-auto p-4">
                <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}
