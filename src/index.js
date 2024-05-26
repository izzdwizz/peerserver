// import { PeerServer } from 'peer';

// export default function StartPeerServer() {
// 	PeerServer({ port: 4404, path: '/myapp' });
// }

import { PeerServer } from 'peer';

// Use the PORT environment variable provided by Render
const PORT = 4404;
const PATH = '/myapp';

export default function StartPeerServer() {
	PeerServer({ port: PORT, path: PATH });
}
