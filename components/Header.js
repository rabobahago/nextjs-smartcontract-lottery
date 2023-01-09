import { ConnectButton } from "web3uikit"
export default function () {
    return (
        <div>
            Decentralized Lottery
            <ConnectButton moralisAuth={false} />
        </div>
    )
}
