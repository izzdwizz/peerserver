import { PeerServer } from 'peer';

export default function StartPeerServer() {
	PeerServer({ port: 4404, path: '/myapp' });
}
